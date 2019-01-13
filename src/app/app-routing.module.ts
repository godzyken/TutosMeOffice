import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BronzesComponent} from "./bronzes/bronzes.component";
import {GoldsComponent} from "./golds/golds.component";
import {AjoutBronzeComponent} from "./ajout-bronze/ajout-bronze.component";
import {AjoutGoldComponent} from "./ajout-gold/ajout-gold.component";
import {SheetjsComponent} from "./sheetjs/sheetjs.component";

const routes: Routes = [
  {path: 'bronze', component: BronzesComponent},
  {path: 'ajout-bronze', component: AjoutBronzeComponent},
  {path: 'gold', component: GoldsComponent},
  {path: 'ajout-gold', component: AjoutGoldComponent},
  {path: 'sheetjs', component: SheetjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
