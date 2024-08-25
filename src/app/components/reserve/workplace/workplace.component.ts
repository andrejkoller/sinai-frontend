import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';

@Component({
  selector: 'app-workplace',
  standalone: true,
  imports: [],
  templateUrl: './workplace.component.html',
  styleUrl: './workplace.component.scss',
})
export class WorkplaceComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
