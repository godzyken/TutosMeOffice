import { Component, OnInit } from '@angular/core';
import {Bronze} from "./bronzes.interface";
import {BronzeService} from "./bronze.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bronzes',
  templateUrl: './bronzes.component.html',
  styleUrls: ['./bronzes.component.scss']
})
export class BronzesComponent implements OnInit {

  bronzes: Bronze[];

  constructor(private bronzeService: BronzeService, private router: Router) { }

  ngOnInit() {
    this.bronzeService
      .getBronze()
      .subscribe((data: Bronze[]) => {
        this.bronzes = data;
      });
  }

  goToAddBronze(){
    this.router.navigateByUrl('/ajout-bronze');
  }

  goToAddListBronze(){
    this.router.navigateByUrl('/ajout-list-bronze');
  }

}
