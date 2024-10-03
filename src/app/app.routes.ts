import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DateComponent } from './components/reserve/date/date.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { DepartmentComponent } from './components/reserve/department/department.component';
import { WorkplaceComponent } from './components/reserve/workplace/workplace.component';
import { SummaryComponent } from './components/reserve/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditDepartmentComponent } from './components/dashboard/edit-department/edit-department.component';
import { EditWorkplaceComponent } from './components/dashboard/edit-workplace/edit-workplace.component';
import { EditFaqComponent } from './components/dashboard/edit-faq/edit-faq.component';
import { EditReservationComponent } from './components/dashboard/edit-reservation/edit-reservation.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorComponent } from './components/error/error.component';
import { MyReservationsComponent } from './components/my-reservations/my-reservations.component';
import { AllReservationsComponent } from './components/all-reservations/all-reservations.component';

export const routes: Routes = [
  {
    path: '',
    component: ReserveComponent,
    title: 'Sinai',
  },
  {
    path: 'reserve/date',
    component: DateComponent,
    title: 'Sinai',
  },
  {
    path: 'reserve/department',
    component: DepartmentComponent,
    title: 'Sinai',
  },
  {
    path: 'reserve/workplace',
    component: WorkplaceComponent,
    title: 'Sinai',
  },
  {
    path: 'reserve/summary',
    component: SummaryComponent,
    title: 'Sinai',
  },
  {
    path: 'my-reservations',
    component: MyReservationsComponent,
    title: 'Sinai',
  },
  {
    path: 'all-reservations',
    component: AllReservationsComponent,
    title: 'Sinai',
  },
  {
    path: 'faqs',
    component: FaqComponent,
    title: 'Sinai',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Sinai',
  },
  {
    path: 'dashboard/edit/departments',
    component: EditDepartmentComponent,
    title: 'Sinai',
  },
  {
    path: 'dashboard/edit/workplaces',
    component: EditWorkplaceComponent,
    title: 'Sinai',
  },
  {
    path: 'dashboard/edit/reservations',
    component: EditReservationComponent,
    title: 'Sinai',
  },
  {
    path: 'dashboard/edit/faqs',
    component: EditFaqComponent,
    title: 'Sinai',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Sinai - Registration',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Sinai - Login',
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'Error',
  },
];
