import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
// import { PatientComponent } from './shared/patient.component';
import { SignUpComponent } from './sign-up.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
    // SignUpComponent,
    // PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule.forChild([
    //   { path: '', component: PatientComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
