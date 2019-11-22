import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FileService} from "../../../sevices/document/file.service";
import {document} from "../../../model/document";

@Component({
  selector: 'app-docfile',
  templateUrl: './docfile.component.html',
  styleUrls: ['./docfile.component.css']
})
export class DocfileComponent implements OnInit {
 FileForm:FormGroup;
 document = new document();
  constructor(private fileService:FileService, private fb:FormBuilder) { }

  ngOnInit() {
    this.FileForm = this.fb.group({
      titre: [''],
      typefile: [''],
      DataCreation: [''],
      docfile: [''],
    });
  }

  onFileSelected(event){
    if(event.target.files.length > 0){
      const docfile = event.target.files[0];
      this.FileForm.get('docfile').setValue(docfile);
    }
    console.log(event.target.files);
  }

  onSubmit(){
    const formData =new FormData();
    formData.append('name',this.FileForm.get('name').value);
    formData.append('docfile',this.FileForm.get('profile').value);
  }

}
