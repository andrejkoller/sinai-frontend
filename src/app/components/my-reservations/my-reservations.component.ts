import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ComponentService } from '../../services/component.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReservationService } from '../../services/reservation.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [MatTableModule, MatCard, MatCardContent, MatButtonModule, MatPaginatorModule],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss',
})
export class MyReservationsComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Status',
    'Start',
    'End',
    'Note',
    'Edit',
    'Delete',
  ];

  constructor(
    private componentService: ComponentService,
    protected reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.showMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
    this.reservationService.getReservationSource();
  }

  editReservation(id: number) {}

  deleteReservation(id: number) {}
}
