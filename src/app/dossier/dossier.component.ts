import { Component, OnInit } from '@angular/core';
import {DossierService} from "../sevices/dossier/dossier.service";

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {

  constructor(private  dossierService:DossierService) { }

  ngOnInit() {
  }

  OnCreate(data){
    console.log(data);
  }

}
