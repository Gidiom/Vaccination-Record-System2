import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'patients', 
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  // {
  //   path: 'patients/register', component: RegisterComponent,
  //   loadChildren: () => import('./patient/patient.module').then(m => m.RegisterModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
