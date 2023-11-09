import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-flying-balloon',
  templateUrl: './flying-balloon.component.html',
  styleUrls: ['./flying-balloon.component.scss'],
  animations: [
    trigger('fly', [
      state(
        'start',
        style({
          top: '450px', // начальное положение
        })
      ),
      state(
        'end',
        style({
          top: '55px', // конечное положение
        })
      ),
      transition('start <=> end', [
        animate('2s ease-in-out'), // продолжительность анимации
      ]),
    ]),
  ],
})
export class FlyingBalloonComponent implements OnInit {
  balloonState = 'start';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.flyBalloon();
    }, 5000);
    console.log('test');
    // this.flyBalloon();
  }

  start(): void {
    console.log(this.balloonState);
    this.flyBalloon();
  }

  flyBalloon() {
    this.balloonState = 'end';
  }
}
