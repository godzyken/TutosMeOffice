import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class BronzeService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getBronze(){
    return this
      .http
      .get(`${this.url}/golds`);
  }


  createBronze(data){
    this.http.post(`${this.url}/golds`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre Membres Bronze a été créér avec succés.', 'Success');
        },
        err => {
          console.log('Error occured:', err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
