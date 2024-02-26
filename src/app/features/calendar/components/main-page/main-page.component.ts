import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'calendar-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class CalendarMainPageComponent implements OnInit {

  hasDayOpenModal$ = this._board.hasDayOpenModal$;

  constructor(private _board: BoardService) { }

  ngOnInit(): void {
  }

}
