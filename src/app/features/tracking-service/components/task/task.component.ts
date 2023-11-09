import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  map,
  Observable,
  of,
  repeatWhen,
  Subject,
  takeUntil,
  timer,
} from 'rxjs';
import { ButtonPlayType, TagType } from '../../constants/consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() taskName: string;
  @Input() taskTimeStart: number;
  @Input() tagType: TagType;
  @Output() action = new EventEmitter<boolean>();
  @Output() taskTimeEnd = new EventEmitter<number>();

  taskTime: number;
  timeCounter$: Observable<string> = of(this.formatSecondsToString(0));
  private readonly _stop = new Subject<void>();
  private readonly _start = new Subject<void>();
  buttonAction: ButtonPlayType = ButtonPlayType.play;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.taskTime = this.taskTimeStart;
    this.timeCounter$ = of(this.formatSecondsToString(this.taskTimeStart));

    console.log(this.tagType);
  }

  actionClicked(): void {
    this.action.emit(true);
    if (this.buttonAction === ButtonPlayType.play) {
      this.startTimeCounter(this.taskTime);
      return;
    }

    this.timerStop();
  }

  getToURL(): void {
    if (this.tagType !== TagType.jira) {
      return;
    }
    window.open('https://jira.skyeng.tech/browse/' + this.taskName, '_blank');
  }

  private startTimeCounter(number: number): void {
    this.timerStart();
    let intervalTimer = timer(0, 1000);

    this.timeCounter$ = intervalTimer.pipe(
      takeUntil(this._stop),
      repeatWhen(() => this._start),
      map((data) => {
        this.taskTime = number + data;
        return this.formatSecondsToString(this.taskTime);
      })
    );
  }

  private timerStart(): void {
    this.buttonAction = ButtonPlayType.stop;
    this._start.next();
  }

  private timerStop(): void {
    this.buttonAction = ButtonPlayType.play;
    this._stop.next();
  }

  private formatSecondsToString(seconds: number) {
    let s = (seconds % 60).toString();
    let m = Math.floor((seconds / 60) % 60).toString();
    let h = Math.floor((seconds / 60 / 60) % 60).toString();
    return `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
  }
}
