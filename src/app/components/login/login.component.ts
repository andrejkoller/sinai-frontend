import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(protected componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideSidebar();
    this.componentService.hideHeader();
    this.componentService.hideFooter();
  }
}
