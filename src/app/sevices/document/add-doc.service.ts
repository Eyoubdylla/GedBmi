import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AddDocService {

  constructor(private Http:HttpClient) { }



  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Nom: new FormControl('', Validators.required),
    Emplacement: new FormControl('', Validators.required),
    DateCreation: new FormControl('', Validators.required),
    DateModification: new FormControl('',Validators.required),
    fileType: new FormControl('',Validators.required),
    Uploadfile: new FormControl(''),
  });


  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Nom: '',
      Emplacement: '',
      hireDate: '',
      Prenom: '',
    });
  }

}
