import { Injectable } from '@angular/core';
import { ActionInfo } from "../constants/interface";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  selectedActions$: ActionInfo[] = [
    {name: 'run', isCompleted: true},
    {name: 'vitamins', isCompleted: true},
    {name: 'horizontalBar', isCompleted: true},
    {name: 'pushUps', isCompleted: false},
  ];

  constructor() {
  }

  public getSelectedActions(): ActionInfo[] {
    return this.selectedActions$;
  }

  public changeActionResult(name: string): void {
    this.selectedActions$.map((actionInfo) => {
      if (actionInfo.name === name) {
        actionInfo.isCompleted = !actionInfo.isCompleted;
        return;
      }
    });
  }
}
