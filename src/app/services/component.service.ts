import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  visible: boolean = true;

  constructor() {}

  showSidebar() {
    this.visible = true;
  }

  hideSidebar() {
    this.visible = false;
  }

  showHeader() {
    this.visible = true;
  }

  hideHeader() {
    this.visible = false;
  }

  showFooter() {
    this.visible = true;
  }

  hideFooter() {
    this.visible = false;
  }
}
