import { Component, OnInit } from '@angular/core';
import { DateService } from "../../services/date.service";
import { BoardService } from "../../services/board.service";
import { DAYS_OF_WEEK } from "../../constants/consts";

@Component({
  selector: 'calendar-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  monthName: string = this._date.monthName + ' ' + this._date.year;
  daysOfWeek = DAYS_OF_WEEK;

  days$ = this._date.dates$;

  constructor(private _date: DateService, private _board: BoardService) {
  }

  ngOnInit(): void {
    // let test = this._date.data;
    //
    // console.log(test.getDay())
    //
    // let today = new Date();
    // let or = new Date(today.getFullYear(), today.getMonth(), 1);
    //
    // console.log(or.getDay())
  }

  public openDay(): void {
    this._board.openDayModal();
  }
}
