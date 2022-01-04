import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { AuthGuard } from './shared/auth.guard';
import { HeaderComponent } from './public/public/header/header.component';
import { FooterComponent } from './public/public/footer/footer.component';
import { BaniereComponent } from './public/component/baniere/baniere.component';
import { IndexComponent } from './public/index/index.component';
import { ContactComponent } from './public/component/contact/contact.component';
import { AboutComponent } from './public/component/about/about.component';
import { ChoiseComponent } from './public/component/choise/choise.component';
import { DoctorsComponent } from './public/component/doctors/doctors.component';
import { TestimonyComponent } from './public/component/testimony/testimony.component';
import { AbonnementComponent } from './mvc/component/abonnement/abonnement.component';
import { PatientsComponent } from './mvc/component/patients/patients.component';
import { AheaderComponent } from './mvc/public/aheader/aheader.component';
import { AfooterComponent } from './mvc/public/afooter/afooter.component';
import { AsidebarComponent } from './mvc/public/asidebar/asidebar.component';
import { HomeComponent } from './mvc/home/home.component';
import { VaccinComponent } from './mvc/component/vaccin/vaccin.component';
import { PatientComponent } from './mvc/form/patient/patient.component';
import { AddAbonnementComponent } from './mvc/form/add-abonnement/add-abonnement.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AppComponent,
    AuthComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BaniereComponent,
    IndexComponent,
    ContactComponent,
    AboutComponent,
    ChoiseComponent,
    DoctorsComponent,
    TestimonyComponent,
    AbonnementComponent,
    PatientsComponent,
    AheaderComponent,
    AfooterComponent,
    AsidebarComponent,
    HomeComponent,
    VaccinComponent,
    PatientComponent,
    AddAbonnementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
