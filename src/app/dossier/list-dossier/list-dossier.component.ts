import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {Dossier} from "../../classes/dossier";
import {Utilisateur} from "../../classes/utilisateur";
import {DossierService} from "../../sevices/dossier/dossier.service";

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'nom', 'dateCreation', 'Emplacement', ];
  dataSource: MatTableDataSource<Dossier>;
  formFilter = new FormGroup({
    search : new FormControl()
  });

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();}

  constructor(private dossierService: DossierService) { }

  ngOnInit() {
    this.getDossiers();
  }
  getDossiers(){
    this.dossierService.getAll().then(res=> {
      console.log(res);
      this.dataSource = new MatTableDataSource<Dossier>(res);

    })
  }

}
