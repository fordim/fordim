import { Component, Input, OnInit } from '@angular/core';
import { Day } from "../../constants/interface";

@Component({
  selector: 'calendar-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() day: Day;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.day.type)
  }

}
