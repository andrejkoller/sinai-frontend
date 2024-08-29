import { Department } from './department.model';

export interface Workplace {
  id: number;
  name: string;
  position: number;
  created_at?: Date;
  updated_at?: Date;
  department?: Department;
  department_id?: number;
  department_name?: string;
}
