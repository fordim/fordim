import { Component } from '@angular/core';
import { PageService } from "../../service/page.service";
import { DEFAULT_CONFETTI_SETTINGS, playConfetti } from "../../../shared/play-confetti";
import { delay } from "rxjs";

@Component({
  selector: 'wedding-welcome-page-modal',
  templateUrl: './welcome-page-modal.component.html',
  styleUrl: './welcome-page-modal.component.scss'
})
export class WelcomePageModalComponent {

  constructor(private _page: PageService) { }

  closeModal(): void {
    this._page.closeWelcomeModal();

    playConfetti({
      ...DEFAULT_CONFETTI_SETTINGS,
      origin: {
        y: 0.5,
        x: 0.5,
      },
    })
      .pipe(delay(100))
      .subscribe(() => {});
  }
}
