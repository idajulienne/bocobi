import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { AbonnementComponent } from './mvc/component/abonnement/abonnement.component';
import { PatientsComponent } from './mvc/component/patients/patients.component';
import { AddAbonnementComponent } from './mvc/form/add-abonnement/add-abonnement.component';
import { PatientComponent } from './mvc/form/patient/patient.component';
import { HomeComponent } from './mvc/home/home.component';
import { IndexComponent } from './public/index/index.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: "home", component:IndexComponent },
  { path: "admin/home", component:HomeComponent },
  { path: "admin/patients/add", component:PatientComponent },
  { path: "admin/patients", component:PatientsComponent },
  { path: "admin/abonnements", component:AbonnementComponent },
  { path: "admin/abonnements/add", component:AddAbonnementComponent },
  { path: "acceuil", component:AcceuilComponent },
  { path: "auth", component:AuthComponent },
  { path: "log-in", component: AuthComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo:"log-in", pathMatch:"full" },
  { path: "user-profile", component: AcceuilComponent, canActivate:[AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
