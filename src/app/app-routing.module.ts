import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {LoginGuardService} from "./sevices/login-guard.service";
import {RegistrationComponent} from "./registration/registration.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginGuardService]},
  {path:"gestionUser",component:GestionUtilisateurComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"edit-user/:Id",component:EditUserComponent},
  // {path:"/",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
