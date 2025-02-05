import { Component } from '@angular/core';
import { PageService } from "../../service/page.service";

@Component({
  selector: 'wedding-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class WeddingMainPageComponent {
  hasWelcomeModal$ = this._page.hasWelcomeModal$;
  isImagesLoaded$ = this._page.isImagesLoaded$;

  constructor(private _page: PageService) { }

  ngOnInit(): void {
    this._page.loadResources();
  }

  openMapMarriageRegistry(): void {
    window.open('https://yandex.ru/maps/-/CHeHZJ1e', '_blank');
  }

  openMapRestaurant(): void {
    window.open('https://yandex.ru/maps/-/CHeHZQ26', '_blank');
  }
}
