import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  hasDayOpenModal$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public openDayModal(): void {
    this.hasDayOpenModal$.next(true);
  }

  public closeDayModal(): void {
    this.hasDayOpenModal$.next(false);
  }
}
