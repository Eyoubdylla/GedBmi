import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {LoginGuardService} from "./sevices/login-guard.service";
import {RegistrationComponent} from "./registration/registration.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DossierComponent} from "./dossier/dossier.component";
import {MdfierDocmtComponent} from "./dossier/gestionDocmt/mdfier-docmt/mdfier-docmt.component";
import {RechDocumtComponent} from "./dossier/gestionDocmt/rech-documt/rech-documt.component";
import {ListDossierComponent} from "./dossier/list-dossier/list-dossier.component";
const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginGuardService]},
  {path:"gestionUser",component:GestionUtilisateurComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"edit-user/:Id",component:EditUserComponent},
  {path:"gestionDossier",component:DossierComponent},
  {path:"MdfierDoc",component:MdfierDocmtComponent},
  {path:"RechDoc",component:RechDocumtComponent},
  {path:"ListeDossier",component:ListDossierComponent},
  // {path:"/",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
