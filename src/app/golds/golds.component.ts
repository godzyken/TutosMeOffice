import { Component, OnInit } from '@angular/core';
import {Gold} from "./golds.interface";
import {GoldService} from "./gold.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-golds',
  templateUrl: './golds.component.html',
  styleUrls: ['./golds.component.scss']
})
export class GoldsComponent implements OnInit {

  golds: Gold[];

  constructor(private goldService: GoldService, private router: Router) { }

  ngOnInit() {
    this.goldService
      .getGold()
      .subscribe((data: Gold[]) => {
        this.golds = data;
      });
  }

  goToAddGold(){
    this.router.navigateByUrl('/ajout-gold');
  }

}
