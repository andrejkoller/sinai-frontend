import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.showDashboardTitle();
    this.componentService.hideHeader();
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideFaqTitle();
  }
}
