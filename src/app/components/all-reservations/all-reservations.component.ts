import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ReservationService } from '../../services/reservation.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-all-reservations',
  standalone: true,
  imports: [
    MatTableModule,
    MatCard,
    MatCardContent,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.scss',
})
export class AllReservationsComponent implements OnInit {
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
    this.componentService.showHeader();
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
