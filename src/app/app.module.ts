import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { RegistrationComponent } from './registration/registration.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DossierComponent } from './dossier/dossier.component';
import { MdfierDocmtComponent } from './dossier/gestionDocmt/mdfier-docmt/mdfier-docmt.component';
import { RechDocumtComponent } from './dossier/gestionDocmt/rech-documt/rech-documt.component';
import { ListDossierComponent } from './dossier/list-dossier/list-dossier.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionUtilisateurComponent,
    RegistrationComponent,
    EditUserComponent,
    DossierComponent,
    MdfierDocmtComponent,
    RechDocumtComponent,
    ListDossierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
