import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  hasWelcomeModal$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  public openWelcomeModal(): void {
    this.hasWelcomeModal$.next(true);
  }

  public closeWelcomeModal(): void {
    this.hasWelcomeModal$.next(false);
  }
}
