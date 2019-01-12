import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BronzesComponent} from "./bronzes/bronzes.component";
import {GoldsComponent} from "./golds/golds.component";

const routes: Routes = [
  {path: 'bronze', component: BronzesComponent},
  {path: 'gold', component: GoldsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
