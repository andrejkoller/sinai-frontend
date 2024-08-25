import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  visible: boolean = true;
  datepicker: boolean = false;
  department: boolean = false;

  myReservationsTitle: boolean = false;
  faqTitle: boolean = false;
  dashboardTitle: boolean = false;
  settingsTitle: boolean = false;

  constructor() {}

  /* Sidebar */
  showSidebar() {
    this.visible = true;
  }

  hideSidebar() {
    this.visible = false;
  }

  /* Header */
  showHeader() {
    this.visible = true;
  }

  hideHeader() {
    this.visible = false;
  }

  /* Footer */
  showFooter() {
    this.visible = true;
  }

  hideFooter() {
    this.visible = false;
  }

  /* Date */
  showDate() {
    this.datepicker = true;
  }

  hideDate() {
    this.datepicker = false;
  }

  /* Date */
  showDepartment() {
    this.department = true;
  }

  hideDepartment() {
    this.department = false;
  }

  /* My Reservations Title */
  showMyReservationsTitle() {
    this.myReservationsTitle = true;
  }

  hideMyReservationsTitle() {
    this.myReservationsTitle = false;
  }

  /* FAQ Title */
  showFaqTitle() {
    this.faqTitle = true;
  }

  hideFaqTitle() {
    this.faqTitle = false;
  }

  /* Dashboard Title */
  showDashboardTitle() {
    this.dashboardTitle = true;
  }

  hideDashboardTitle() {
    this.dashboardTitle = false;
  }
}
