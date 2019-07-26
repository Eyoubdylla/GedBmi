import { Component, OnInit } from '@angular/core';
import {GestionUtilisateurService} from "../gestion-utilisateur.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit{
  listUser;
  constructor(private utilisateurService:GestionUtilisateurService, private router:Router){}
  ngOnInit() {
    this.OnGetAllUser();
  }
  OnGetAllUser(){
    this.utilisateurService.getAllUtilisateurs()
      .subscribe(data=> {
        this.listUser = data;
        console.log(this.listUser);
        //this.utilisateurService.loadToken();
        //throw new Error("Method not implemented.");
      },err=>{
        console.log(err);
      })
  }

  OnNewUser(){
    this.router.navigateByUrl('/registration');
  }
  removUser(u){
    let c = confirm("vous etes sur?")
    if (!c) return;
    this.utilisateurService.removeUser(u._links.self.href)
    .subscribe(data=> {
      this.OnGetAllUser();
    },err=>{
      console.log(err);
    })
  }


  editUser(u){
    this.router.navigateByUrl("/edit-user/"+btoa(u._links.self.href));
  }

}
