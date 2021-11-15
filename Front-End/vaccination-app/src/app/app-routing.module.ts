import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: 'patients', component: PatientComponent,
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  // {
  //   path: '', component: PatientComponent,
  //   loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
