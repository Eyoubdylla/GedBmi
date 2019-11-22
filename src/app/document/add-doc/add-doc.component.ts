import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddDocService} from "../../sevices/document/add-doc.service";
import {DocumentService} from "../../sevices/document/document.service";
import {document} from "../../model/document";


@Component({
    selector: 'app-add-doc',
    templateUrl: './add-doc.component.html',
    styleUrls: ['./add-doc.component.css']
  })
  export class AddDocComponent implements OnInit {
  document = new document()
  constructor(private addDoService: AddDocService, private documentService:DocumentService) {
}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Nom: new FormControl('', Validators.required),
    Emplacement: new FormControl('', Validators.required),
    DateCreation: new FormControl('', Validators.required),
    DateModification: new FormControl('',Validators.required),
    fileType: new FormControl('',Validators.required),
    Uploadfile: new FormControl(''),
  });



  ngOnInit() {
  }

  onSelectFile(event){
    const file = event.event.target.files[0];

  }
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Nom: '',
      Emplacement: '',
      hireDate: '',
      Prenom: '',
    });
  }

  popularDoc(){
    this.form.setValue(document)
  }
  OnSelectFile(){


  }
}
