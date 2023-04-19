import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    this.loading = true;
    this.vacancyService.getTop10Vacancies().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }
}
