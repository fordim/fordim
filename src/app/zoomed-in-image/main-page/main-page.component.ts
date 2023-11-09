import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {map, Observable, of, repeatWhen, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'zoomed-in-image-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageZoomedInImageComponent implements OnInit {
  activeUser$ = this._user.activeUser$;

  tennisBall1 = '/assets/zoomed-in-image/images/tennis-ball-1.png';
  tennisBall2 = '/assets/zoomed-in-image/images/tennis-ball-2.png';
  tennisBall3 = '/assets/zoomed-in-image/images/tennis-ball-3.png';

  @ViewChild('image1', {static: true}) private image1: ElementRef<HTMLElement>;
  @ViewChild('image2', {static: true}) private image2: ElementRef<HTMLElement>;
  @ViewChild('image3', {static: true}) private image3: ElementRef<HTMLElement>;

  timeCounter$: Observable<number> = of(0);
  private readonly _stop = new Subject<void>();
  private readonly _start = new Subject<void>();
  currentState: number = 1;

  constructor(private _user: UserService) {
  }

  ngOnInit(): void {
    this.setCurrentState(1);
    this.image1.nativeElement.style.backgroundImage = `url(${this.tennisBall1})`;
    this.image2.nativeElement.style.backgroundImage = `url(${this.tennisBall2})`;
    this.image3.nativeElement.style.backgroundImage = `url(${this.tennisBall3})`;

    this.startTimeCounter(5);
  }

  clickOnImage(): void {
    console.log(this.currentState);
    if (this.currentState === 3) {
      this.showSecondPicture();
      this.currentState = 2;
      return;
    }

    if (this.currentState === 2) {
      this.showThirdPicture();
      this.currentState = 1;
      return;
    }

    if (this.currentState === 1) {
      // restart
      this.showFirstPicture();
      this.currentState = 3;
      return;
    }
  }

  stopTimer(): void {
    this.timerStop();
    console.log(this.currentState);
  }

  private setCurrentState(value: number): void {
    this.currentState = value;
  }

  private showFirstPicture(): void {
    this.image3.nativeElement.style.opacity = `1`;
    this.image2.nativeElement.style.opacity = `1`;
    this.image1.nativeElement.style.opacity = `1`;
  }

  private showSecondPicture(): void {
    this.image1.nativeElement.style.opacity = `0`;
  }

  private showThirdPicture(): void {
    this.image2.nativeElement.style.opacity = `0`;
  }

  private showPicture(): void {
    this.timerStop();

    if (this.currentState === 1) {
      this.showSecondPicture();
      this.currentState++;
      return this.timerStart();
    }

    if (this.currentState === 2) {
      this.showThirdPicture();
      this.currentState++;
      return this.timerStart();
    }
  }

  private startTimeCounter(number: number): void {
    this.timerStart();
    let intervalTimer = timer(0,1000);

    this.timeCounter$ = intervalTimer
      .pipe(takeUntil(this._stop), repeatWhen(() => this._start), map((data) => {
        if ((number - data) === 0) {
          this.showPicture();
        }

        return number - data;
      }))
  }

  private timerStart(): void {
    this._start.next();
  }

  private timerStop(): void {
    this._stop.next();
  }
}
