import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class GoldService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getGold(){
    return this
      .http
      .get(`${this.url}/golds`);
  }


  createGold(data){
    this.http.post(`${this.url}/golds`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre Membres Gold a été créér avec succés.', 'Success');
          this.router.navigateByUrl('/bronze');
        },
        err => {
          console.log('Error occured:', err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
