import {Component, OnInit} from '@angular/core';
import { Vacancy } from 'src/app/models';
import { VacancyService } from 'src/app/vacancy.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  @Input()
  vacancies: Vacancy[] = [];
  loading = false;

  newName= '';
  newDesc= '';
  company_idd = 0;
  salary = 0;
  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }

  addVacancy(){
    if (this.newName.length) {
      this.vacancyService.createVacancy(this.newName, this.newDesc, this.company_idd, this.salary).subscribe((vacancy) => {
        this.vacancies.push(vacancy);
        this.newName = '';
        this.newDesc = '';
        this.company_idd = 0;
        this.salary = 0;
      });
    }
  }
  viewDetails(vacancy: Vacancy) {
    this.router.navigate(['/vacancies', vacancy.id]);
  }
}
