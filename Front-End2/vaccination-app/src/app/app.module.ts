import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
// import { PatientComponent } from './shared/patient.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    RegisterComponent,
    LoginComponent
    // PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    // RouterModule.forChild([
    //   { path: '', component: PatientComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
