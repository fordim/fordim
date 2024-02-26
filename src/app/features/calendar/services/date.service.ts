import { Injectable } from '@angular/core';
import { DayType, MONTH_NAME } from "../constants/consts";
import { Day } from "../constants/interface";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  data: Date;
  monthName: string;
  year: number;
  lastDayOfMonth: Date;
  firstDayOfMonth: Date;
  dates$: Day[] = [];

  constructor() {
    this.data = new Date();
    // this.data = new Date(2024, 4, 3);
    this.monthName = MONTH_NAME[this.data.getMonth()];
    this.year = this.data.getFullYear();
    this.lastDayOfMonth = new Date(this.data.getFullYear(), this.data.getMonth() + 1, 0);
    this.firstDayOfMonth = new Date(this.data.getFullYear(), this.data.getMonth(), 1);

    this.createDates();
  }

  createDates(): void {
    for (let j = 1; j < this.firstDayOfMonth.getDay(); j++) {
      this.dates$.push({type: DayType.blocked, number: null} as Day);
    }

    for (let i = 1; i <= this.lastDayOfMonth.getDate(); i++) {
      this.dates$.push({type: DayType.active, number: i} as Day);
    }
  }
}
