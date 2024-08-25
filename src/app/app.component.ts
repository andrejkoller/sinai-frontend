import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ComponentService } from './services/component.service';
import { DarkmodeService } from './services/darkmode.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private componentService: ComponentService,
    private darkmodeService: DarkmodeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideFaqTitle();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideDashboardTitle();
    if (typeof window !== 'undefined' && window.localStorage) {
      this.darkmodeService.currentTheme =
        localStorage.getItem('theme') || 'light-theme';
    }

    this.renderer.addClass(
      this.document.body,
      this.darkmodeService.currentTheme
    );
  }

  callSwitchMode(isDarkMode: boolean) {
    this.darkmodeService.switchMode(isDarkMode);
  }
}
