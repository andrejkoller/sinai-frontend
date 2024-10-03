import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    protected componentService: ComponentService,
    private toastr: ToastrService,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.componentService.showHeader();
  }

  saveDate() {
    this.router.navigate(['/reserve/department']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.reservationService.reservationSource.filter = filterValue
      .trim()
      .toLowerCase();
  }

  logout() {
    this.router.navigate(['/login']).then(() => {
      this.toastr.success('Logout sucessful');
    });
  }
}
