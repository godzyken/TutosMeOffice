import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BronzesComponent} from "./bronzes/bronzes.component";
import {GoldsComponent} from "./golds/golds.component";
import {AjoutBronzeComponent} from "./ajout-bronze/ajout-bronze.component";
import {AjoutGoldComponent} from "./ajout-gold/ajout-gold.component";
import {SheetjsComponent} from "./sheetjs/sheetjs.component";
import {AjoutListGoldComponent} from "./ajout-list-gold/ajout-list-gold.component";
import {AjoutListBronzeComponent} from "./ajout-list-bronze/ajout-list-bronze.component";

const routes: Routes = [
  {path: 'bronzes', component: BronzesComponent},
  {path: 'ajout-bronze', component: AjoutBronzeComponent},
  {path: 'ajout-list-bronze', component: AjoutListBronzeComponent},
  {path: 'golds', component: GoldsComponent},
  {path: 'ajout-gold', component: AjoutGoldComponent},
  {path: 'ajout-list-gold', component: AjoutListGoldComponent},
  {path: 'sheetjs', component: SheetjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
