import { Component } from '@angular/core';
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'calendar-day-open-modal',
  templateUrl: './day-open-modal.component.html',
  styleUrls: ['./day-open-modal.component.scss']
})
export class DayOpenModalComponent {

  closeIcon = '/assets/think-it-up/images/popup-close.svg';

  constructor(private _board: BoardService) { }

  closeModal(): void {
    this._board.closeDayModal();
  }

}
