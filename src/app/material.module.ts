import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatGridListModule, MatIconModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule,
  MatRadioModule, MatSelectModule, MatSortModule,
  MatToolbarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,MatNativeDateModule, MatDatepickerModule, MatRadioModule, MatTableModule, MatInputModule,MatGridListModule,ReactiveFormsModule,NoopAnimationsModule, MatFormFieldModule, MatSelectModule,MatMenuModule,
    MatSortModule,MatCardModule,MatButtonModule,MatIconModule,MatPaginatorModule,MatDialogModule
  ]
})
export class MaterialModule { }
