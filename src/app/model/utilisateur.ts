import {Roles} from "./Roles";

export class Utilisateur {
  id: number;
  public username:string="";
  public password :string="";
  public email:string="";
  public roles:Roles[];

}
