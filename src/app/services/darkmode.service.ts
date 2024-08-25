import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  OnInit,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService implements OnInit {
  private renderer: Renderer2;
  public currentTheme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get isDarkMode(): boolean {
    return this.currentTheme === 'dark-theme';
  }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('theme') || 'light-theme';
  }

  switchMode(isDarkMode: boolean) {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.currentTheme = isDarkMode ? 'dark-theme' : 'light-theme';
    this.renderer.addClass(this.document.body, this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }
}
