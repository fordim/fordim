import { Component } from '@angular/core';
import { PageService } from "../../service/page.service";

@Component({
  selector: 'wedding-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class WeddingMainPageComponent {

  hasWelcomeModal$ = this._page.hasWelcomeModal$;

  constructor(private _page: PageService) { }

}
