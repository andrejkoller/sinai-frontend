import { User } from './user.model';
import { Workplace } from './workplace.model';

export interface Reservation {
  id: number;
  start_time: Date;
  end_time: Date;
  status: Reservation_Status;
  created_at?: Date;
  updated_at?: Date;
  notes: string;
  user?: User;
  user_id?: number;
  workplace?: Workplace;
  workplace_id?: number;
}

export enum Reservation_Status {
  confirmed = "confirmed",
  cancelled = "cancelled",
  pending = "pending",
}
