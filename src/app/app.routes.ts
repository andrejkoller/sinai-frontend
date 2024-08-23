import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DateComponent } from './components/reserve/date/date.component';

export const routes: Routes = [
  {
    path: 'reserve/date',
    component: DateComponent,
    title: 'Sinai - Date',
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
];
