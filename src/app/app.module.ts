import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {MaterialModule} from "./material.module";
import { RegistrationComponent } from './registration/registration.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DossierComponent } from './dossier/dossier.component';
import { MdfierDocmtComponent } from './dossier/gestionDocmt/mdfier-docmt/mdfier-docmt.component';
import { RechDocumtComponent } from './dossier/gestionDocmt/rech-documt/rech-documt.component';
import { ListDossierComponent } from './dossier/list-dossier/list-dossier.component';
import {XhrInterceptor} from "./xhr.interceptor";
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
    BrowserModule, MaterialModule,
    AppRoutingModule, HttpClientModule, FormsModule, AngularFontAwesomeModule, MatTableModule, MatFormFieldModule, MatInputModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: XhrInterceptor, multi: true,
    useValue: {hasBackdrop: true}
  },
    CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
