import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private renderer: Renderer2;

  private imageUrls = [
    'assets/wedding/images/page-one.png',
    'assets/wedding/images/page-two.png',
    'assets/wedding/images/page-welcome.png',
    'assets/wedding/images/page-welcome-mobile.png',
  ];
  private audioUrls = ['assets/wedding/music/dancing.mp3'];

  hasWelcomeModal$ = new BehaviorSubject<boolean>(true);
  isImagesLoaded$ = new BehaviorSubject<boolean>(false);

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.lockScroll()
  }

  public loadResources(): void {
    this.loadAllAssets([...this.imageUrls])
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

  lockScroll(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  unlockScroll(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
