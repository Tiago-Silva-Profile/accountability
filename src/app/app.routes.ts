import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LugsComponent } from './lugs/lugs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'dashboard', component: MainComponent }, // Route for the Dashboard component
  { path: 'lugs', component: LugsComponent }, // Route for the Dashboard component
  { path: 'register', component: RegisterComponent}
];
