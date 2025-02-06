import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import * as Constants from "../constants/consts";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private renderer: Renderer2;

  private defaultImageUrls = [
    'assets/wedding/images/page-one.png',
    'assets/wedding/images/page-welcome.png',
    'assets/wedding/images/page-welcome-mobile.png',
  ];

  backgroundImageUrl$ = new BehaviorSubject<string>('');

  hasWelcomeModal$ = new BehaviorSubject<boolean>(true);
  isImagesLoaded$ = new BehaviorSubject<boolean>(false);

  constructor(rendererFactory: RendererFactory2, private router: Router) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.lockScroll()
  }

  public initialization(): void {
    this.router.events.subscribe(() => {
      const fullUrl = this.router.url;

      if (fullUrl.includes(Constants.ANASTASIA_VADIM)) {
        this.addPageTwoAndReturnIt(Constants.ANASTASIA_VADIM);

      } else if (fullUrl.includes(Constants.ALYONA_RUSLAN)) {
        this.addPageTwoAndReturnIt(Constants.ALYONA_RUSLAN);

      } else if (fullUrl.includes(Constants.ANDREY_DARIA)) {
        this.addPageTwoAndReturnIt(Constants.ANDREY_DARIA);

      } else if (fullUrl.includes(Constants.VLADISLAV)) {
        this.addPageTwoAndReturnIt(Constants.VLADISLAV);

      } else if (fullUrl.includes(Constants.EVGENIIA)) {
        this.addPageTwoAndReturnIt(Constants.EVGENIIA);

      } else if (fullUrl.includes(Constants.EKATERINA)) {
        this.addPageTwoAndReturnIt(Constants.EKATERINA);

      } else if (fullUrl.includes(Constants.IRINA_VALERII)) {
        this.addPageTwoAndReturnIt(Constants.IRINA_VALERII);

      } else if (fullUrl.includes(Constants.MAMED)) {
        this.addPageTwoAndReturnIt(Constants.MAMED);

      } else if (fullUrl.includes(Constants.MARINA_YURA)) {
        this.addPageTwoAndReturnIt(Constants.MARINA_YURA);
      }

      this.loadResources();
    });
  }

  private addPageTwoAndReturnIt(names: string): void
  {
    let pageTwo = Constants.pageTwoMap[names];
    this.backgroundImageUrl$.next(Constants.pageTwoMap[names]);
    this.defaultImageUrls = [...this.defaultImageUrls, pageTwo];
  }

  private loadResources(): void {
    this.loadAllAssets([...this.defaultImageUrls])
      .then(() => {
        console.log('Все ресурсы загружены');
        this.isImagesLoaded$.next(true);
      });
  }

  private loadAllAssets(urls: string[]): Promise<void> {
    const promises = urls.map((url) => this.isAudioFile(url) ? this.loadAudio(url) : this.loadImage(url));
    return Promise.all(promises).then(() => {});
  }

  private isAudioFile(url: string): boolean {
    return url.endsWith('.mp3') || url.endsWith('.wav') || url.endsWith('.ogg');
  }

  private loadImage(url: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
  }

  private loadAudio(url: string): Promise<void> {
    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.addEventListener('canplaythrough', () => resolve(), { once: true });
      audio.addEventListener('error', () => resolve(), { once: true });
    });
  }

  public openWelcomeModal(): void {
    this.hasWelcomeModal$.next(true);
  }

  public closeWelcomeModal(): void {
    this.hasWelcomeModal$.next(false);
    this.unlockScroll()
  }

  public lockScroll(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  public unlockScroll(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
