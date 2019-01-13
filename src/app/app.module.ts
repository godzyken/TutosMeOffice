import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BronzesComponent } from './bronzes/bronzes.component';
import { GoldsComponent } from './golds/golds.component';
import { BronzeService } from "./bronzes/bronze.service";
import { GoldService } from "./golds/gold.service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AjoutBronzeComponent } from './ajout-bronze/ajout-bronze.component';
import { AjoutGoldComponent } from './ajout-gold/ajout-gold.component';
import {FormsModule} from "@angular/forms";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { SheetjsComponent } from './sheetjs/sheetjs.component';
import {ExcelService} from "./services/excel.service";
import { AjoutListBronzeComponent } from './ajout-list-bronze/ajout-list-bronze.component';
import { AjoutListGoldComponent } from './ajout-list-gold/ajout-list-gold.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BronzesComponent,
    GoldsComponent,
    AjoutBronzeComponent,
    AjoutGoldComponent,
    SheetjsComponent,
    AjoutListBronzeComponent,
    AjoutListGoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [
    BronzeService,
    GoldService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
