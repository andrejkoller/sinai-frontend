import { Department } from './department.model';
import { Workplace } from './workplace.model';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
  department: Department;
  department_id: number;
  department_name: string;
  workplace: Workplace;
  workplace_id: number;
  workplace_name: string;
}
