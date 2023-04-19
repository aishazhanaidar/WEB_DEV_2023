// @ts-ignore
import { NgModule } from "@angular/core";
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// @ts-ignore
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { Top10Component } from './top10/top10.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyByCompanyComponent } from './vacancy-by-company/vacancy-by-company.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    VacancyComponent,
    Top10Component,
    VacancyDetailsComponent,
    VacancyByCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
