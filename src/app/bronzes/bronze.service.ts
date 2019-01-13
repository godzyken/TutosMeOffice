import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Bronze} from "./bronzes.interface";

@Injectable()
export class BronzeService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  getBronze(): Observable<Bronze[]>{
    return this
      .http
      .get<Bronze[]>(`${environment.apiUrl}/bronzes`);
  }


  createBronze(data){
    this.http.post<Bronze>(`${environment.apiUrl}/bronzes`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre Membre Bronze a été créér avec succés.', 'Success');
        },
        err => {
          console.log('Error occured:', err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
