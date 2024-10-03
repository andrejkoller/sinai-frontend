import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideHeader();
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.hideMyReservationsTitle();
    this.componentService.showFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
