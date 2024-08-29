import { Injectable } from '@angular/core';
import { Reservation, Reservation_Status } from '../models/reservation.model';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservations: Reservation[] = [
    {
      id: 1,
      status: Reservation_Status.confirmed,
      start_time: new Date(),
      end_time: new Date(),
      notes: 'This Reservation is mine',
    },
    {
      id: 2,
      status: Reservation_Status.pending,
      start_time: new Date(),
      end_time: new Date(),
      notes: 'This Reservation is pending',
    },
    {
      id: 3,
      status: Reservation_Status.cancelled,
      start_time: new Date(),
      end_time: new Date(),
      notes: 'This Reservation is cancelled',
    },
    {
      id: 4,
      status: Reservation_Status.confirmed,
      start_time: new Date(),
      end_time: new Date(),
      notes: 'This Reservation is hers',
    },
    {
      id: 5,
      status: Reservation_Status.confirmed,
      start_time: new Date(),
      end_time: new Date(),
      notes: 'This Reservation is theirs',
    },
  ];

  reservationSource = new MatTableDataSource(this.reservations);

  constructor() {}

  getReservationSource() {
    return this.reservationSource;
  }
}
