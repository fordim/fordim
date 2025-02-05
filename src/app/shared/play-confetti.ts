import { from, Observable, tap } from 'rxjs';

declare let confetti: ConfettiFunc;

const CONFETTI_SCRIPT_URL = `assets/js/confetti.js`;

const random = (min: number, max: number): number => Math.random() * (max - min) + min;

export const DEFAULT_CONFETTI_SETTINGS: ConfettiParam = {
  angle: random(90, 90),
  spread: 180,
  particleCount: random(450, 650),
  colors: ["#edc774","#edc774","#edc774","#edc774","#edc774","#edc774","#edc774"],
  origin: {
    y: 0.6,
  },
  zIndex: 100000,
};

interface ConfettiParam {
  angle: number;
  spread: number;
  particleCount: number;
  colors: string[],
  origin: {
    y: number;
    x?: number;
  };
  zIndex: number;
}

export type ConfettiFunc = (param: ConfettiParam) => void;

export function playConfetti(param: ConfettiParam = DEFAULT_CONFETTI_SETTINGS): Observable<void> {
  return from(injectScript(CONFETTI_SCRIPT_URL)).pipe(tap(() => confetti(param)));
}

export const injectScript = (src: string): Promise<void> => {
  return new Promise<void>(resolve => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;

    script.onload = () => {
      resolve();
    };

    document.body.appendChild(script);
  });
};
