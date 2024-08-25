import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.showDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
