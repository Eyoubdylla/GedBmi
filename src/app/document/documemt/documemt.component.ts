import {Component, OnInit, ViewChild} from '@angular/core';
import {DocumentService} from "../../sevices/document/document.service";
import {document} from "../../model/document";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {element} from "protractor";
import {DataSource} from "@angular/cdk/typings/esm5/collections";
import {GroupsDocService} from "../../sevices/GroupsDoc/groups-doc.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddDocComponent} from "../add-doc/add-doc.component";
import {AddDocService} from "../../sevices/document/add-doc.service";
import {DocfileComponent} from "../file/docfile/docfile.component";





@Component({
  selector: 'app-documemt',
  templateUrl: './documemt.component.html',
  styleUrls: ['./documemt.component.css']
})
export class DocumemtComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns:string[]= ['titre', 'dateCreation','id','action'];
  doc:DataSource<any>;
  documents:MatTableDataSource<document>;
  dataSource:DataSource<any>
  document = new document()


  constructor(private documentService:DocumentService, private grpsDocument:GroupsDocService, private matDialog:MatDialog, private addDoService: AddDocService) { }

  ngOnInit() {
    this.OnGetAllDocuments()
    this.OnGetOngrpsDoc()

  }

  // form = new FormGroup({
  //   id: new FormControl(null),
  //   NameGroupDoc: new FormControl(null)
  // });
  get(){
    this.OnGetAllDocuments();
  }

  OnGetAllDocuments(){
    this.documentService.getAllDocuments()
      .subscribe(value=>{
        this.documents= new MatTableDataSource<document>(value);
        this.documents.sort = this.sort;
        this.documents.paginator= this.paginator;

        this.doc=value;
      },err=>{
        console.log(err);
      })
  }
  OnGetOngrpsDoc(){
    this.grpsDocument.getAllGroupsDoc()
      .subscribe(value => {
        console.log(value);
      this.dataSource=value;
    },err=>{
      console.log(err)
    })
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.matDialog.open(DocfileComponent, dialogConfig);
  }



}

