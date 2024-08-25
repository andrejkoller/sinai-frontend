import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  MatFormField,
  MatFormFieldControl,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
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
