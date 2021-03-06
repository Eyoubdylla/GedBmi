import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {LoginGuardService} from "./sevices/login-guard.service";
import {RegistrationComponent} from "./registration/registration.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ListDossierComponent} from "./dossier/list-dossier/list-dossier.component";
import {DocumemtComponent} from "./document/documemt/documemt.component";
import {GroupeDocumComponent} from "./groupe-docum/groupe-docum.component";
import {AddDocComponent} from "./document/add-doc/add-doc.component";
import {DocfileComponent} from "./document/file/docfile/docfile.component";
const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginGuardService]},
  {path:"gestionUser",component:GestionUtilisateurComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"edit-user/:Id",component:EditUserComponent},
  {path:"Dossier",component:ListDossierComponent},
  {path:"Document",component:DocumemtComponent},
  {path:"GrpsUtilisateurs",component:GroupeDocumComponent},
  {path:"AddDoc",component:AddDocComponent},
  {path:"AddDocument",component:DocfileComponent},
  {path:"GroupeDocumComponent",component:GroupeDocumComponent},



  //{path:"/",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
