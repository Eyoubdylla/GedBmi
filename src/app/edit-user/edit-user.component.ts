import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GestionUtilisateurService} from "../gestion-utilisateur.service";
import {Utilisateur} from "../classes/utilisateur";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private courrentUser:Utilisateur;
  private url:string;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,
              private utilisateurService:GestionUtilisateurService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.Id);
    // console.log(this.activatedRoute.snapshot)
    this.utilisateurService.GetRessource(this.url)
      .subscribe(data=>{
        this.courrentUser=data;
    },err=>{
        console.log(err);
      })
  }

  UpdateUser(value:any){
    this.utilisateurService.UpdateRessource(this.url,value)
      .subscribe(data=>{
        alert("mise a jour a effectue avec succe ")
        this.router.navigateByUrl("/gestionUser");
      }, err=>{
        console.log(err);
      })
     // this.utilisateurService.GetRessource()
  }

}
