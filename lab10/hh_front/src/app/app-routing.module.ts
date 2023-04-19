// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {VacancyByCompanyComponent} from "./vacancy-by-company/vacancy-by-company.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {Top10Component} from "./top10/top10.component";
import {VacancyDetailsComponent} from "./vacancy-details/vacancy-details.component";

const routes: Routes = [
  { path: 'companies/:id', component: VacancyByCompanyComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'vacancies', component: VacancyComponent},
  {path: 'vacancies/top_ten', component: Top10Component},
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
