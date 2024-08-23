import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  constructor(protected componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideSidebar();
    this.componentService.hideHeader();
    this.componentService.hideFooter();
  }
}
