import { Component } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { DateService } from "../../services/date.service";
import { Day } from "../../constants/interface";
import { ActionService } from "../../services/action.service";
import { TranslateService } from "../../services/translate.service";

@Component({
  selector: 'calendar-day-open-modal',
  templateUrl: './day-open-modal.component.html',
  styleUrls: ['./day-open-modal.component.scss']
})
export class DayOpenModalComponent {

  closeIcon = '/assets/think-it-up/images/popup-close.svg';
  day: Day | null = this._date.selectedDay;

  actions$ = this._action.selectedActions$;

  constructor(
    private _board: BoardService,
    private _date: DateService,
    private _action: ActionService,
    private _translate: TranslateService,
  ) {
  }

  closeModal(): void {
    this._board.closeDayModal();
  }

  public translateName(key: string): string | undefined {
    return this._translate.getTranslation(key);
  }

  public changeActionInfo(name: string): void {
    this._action.changeActionResult(name);
  }
}
