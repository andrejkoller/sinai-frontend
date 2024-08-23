import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatDatepickerModule, 
    MatInputModule, 
    MatFormFieldModule, 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(protected componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.showHeader();
  }
}
