import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {MaterialModule} from "./material.module";
import { RegistrationComponent } from './registration/registration.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListDossierComponent } from './dossier/list-dossier/list-dossier.component';
import {XhrInterceptor} from "./xhr.interceptor";
import {DocumemtComponent} from "./document/documemt/documemt.component";
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatGridListModule,
  MatIconModule,
  MatMenuModule, MatPaginatorModule, MatRadioModule, MatRippleModule,
  MatSelectModule,
  MatSortModule
} from "@angular/material";
import {NoopAnimationsModule, BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GroupeDocumComponent} from "./groupe-docum/groupe-docum.component";
import {AddDocComponent} from "./document/add-doc/add-doc.component";
import {DocfileComponent} from "./document/file/docfile/docfile.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionUtilisateurComponent,
    RegistrationComponent,
    EditUserComponent,
    ListDossierComponent,
    DocumemtComponent,
    GroupeDocumComponent,
    AddDocComponent,
    DocfileComponent,
    MainNavComponent

  ],
  imports: [
    BrowserModule, MaterialModule,ReactiveFormsModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule, AngularFontAwesomeModule,
    MatRippleModule, MatSortModule,
     MatDatepickerModule, MatRadioModule, MatTableModule, MatInputModule, MatGridListModule,  NoopAnimationsModule, MatFormFieldModule, MatSelectModule, MatMenuModule,
     MatCardModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatSidenavModule, MatToolbarModule, MatListModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: XhrInterceptor, multi: true,
    useValue: {hasBackdrop: true}
  },
    CookieService],
  bootstrap: [AppComponent],
  entryComponents:[AddDocComponent]
})
export class AppModule { }
