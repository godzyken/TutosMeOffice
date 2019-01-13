import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import {Observable} from "rxjs";
import {Gold} from "./golds.interface";
import {environment} from "../../environments/environment";

@Injectable()
export class GoldService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  getGold(): Observable<Gold[]> {
    return this
      .http
      .get<Gold[]>(`${environment.apiUrl}/golds`);
  }


  createGold(data){
    this.http.post(`${environment.apiUrl}/golds`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre Membre Gold a été créér avec succés.', 'Success');
          this.router.navigateByUrl('/bronze');
        },
        err => {
          console.log('Error occured:', err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
