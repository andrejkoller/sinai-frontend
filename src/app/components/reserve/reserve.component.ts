import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.scss',
})
export class ReserveComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
