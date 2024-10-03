import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  headerVisible: boolean = true;
  sidebarVisible: boolean = true;
  footerVisible: boolean = true;
  datepicker: boolean = false;
  department: boolean = false;

  status: boolean = true;
  statusLink: boolean = true;

  myReservationsTitle: boolean = false;
  faqTitle: boolean = false;
  dashboardTitle: boolean = false;
  settingsTitle: boolean = false;

  constructor() {}

  /* Sidebar */
  showSidebar() {
    this.sidebarVisible = true;
  }

  hideSidebar() {
    this.sidebarVisible = false;
  }

  /* Header */
  showHeader() {
    this.headerVisible = true;
  }

  hideHeader() {
    this.headerVisible = false;
  }

  /* Footer */
  showFooter() {
    this.footerVisible = true;
  }

  hideFooter() {
    this.footerVisible = false;
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
