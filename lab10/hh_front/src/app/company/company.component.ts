import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {Router} from "@angular/router";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  newCompanyName: string = '';
  newCompanyDesc: string = '';
  newCompanyCity: string = '';
  newCompanyAddress: string = '';
  loading = false;

  constructor(private router: Router, private companyService: CompanyService) {}
  ngOnInit() {
    this.loading = true;
    this.companyService.getCompanies().subscribe((companies) => {
      this.loading = true;
      this.companies = companies;
    });
  }
  viewVacancies(company: Company) {
    this.router.navigate(['/companies', company.id]);
  }
  addCompany() {
    if (this.newCompanyName.length) {
      this.companyService.createCompany(this.newCompanyName, this.newCompanyDesc, this.newCompanyCity, this.newCompanyAddress).subscribe((company) => {
        this.companies.push(company);
        this.newCompanyName = '';
        this.newCompanyDesc = '';
        this.newCompanyCity = '';
        this.newCompanyAddress = '';
      });
    }
  }
  deleteCategory(company_id: number) {
    this.companyService.deleteCategory(company_id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id !== company_id);
    });
  }
}
