import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  translations = new Map([
    ['run', 'Бег'],
    ['vitamins', 'Витамины'],
    ['horizontalBar', 'Турник'],
    ['pushUps', 'Отжимания'],
  ]);

  constructor() { }

  public getTranslation(key:string): string|undefined {
    return this.translations.get(key);
  }
}
