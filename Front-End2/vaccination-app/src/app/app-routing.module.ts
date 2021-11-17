import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'patients', 
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  {path: 'createStaff', component: SignupComponent},
  {path: 'createPatient', component: RegisterComponent},

  {
    path: '', component: LoginComponent,
    // loadChildren: () => import('./patient/patient.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
