import { Component, OnInit } from '@angular/core';
import {DossierService} from "../../sevices/dossier/dossier.service";

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {

  constructor(private dossierService: DossierService) { }

  ngOnInit() {
  }
  getDossiers(){
    this.dossierService.getAll().then(res=>{
      console.log(res);
    })
  }

}
