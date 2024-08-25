import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
