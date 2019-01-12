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
import {BronzeService} from "./bronzes/bronze.service";
import {GoldService} from "./golds/gold.service";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BronzesComponent,
    GoldsComponent
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
    ToastrModule.forRoot()
  ],
  providers: [
    BronzeService,
    GoldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
