import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    protected componentService: ComponentService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.componentService.showHeader();
  }

  saveDate() {
    this.router.navigate(['/reserve/department']);
  }

  logout() {
    this.router.navigate(['/login']).then(() => {
      this.toastr.success('Logout sucessful');
    });
  }
}
