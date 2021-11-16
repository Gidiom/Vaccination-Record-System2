import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
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
=======
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { SignupComponent } from './register/signup/signup.component';
import { RouterModule } from '@angular/router';



// This is Ghidiom
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,

>>>>>>> 5f06a21b (commit working registration)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
    // RouterModule.forChild([
    //   { path: '', component: PatientComponent}
    // ])
=======
    BrowserAnimationsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {
        path: 'signup',
        component: SignupComponent
      }
    ])
>>>>>>> 5f06a21b (commit working registration)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
