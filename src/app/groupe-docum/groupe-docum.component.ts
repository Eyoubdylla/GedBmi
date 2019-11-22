import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupsDocService} from "../sevices/GroupsDoc/groups-doc.service";
import {DataSource} from "@angular/cdk/typings/esm5/collections";
import {GroupsDoc} from "../model/GroupsDoc";
import {MatTableDataSource} from "@angular/material/table";
import {Dossier} from "../model/Dossier";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";





@Component({
  selector: 'app-groupe-docum',
  templateUrl: './groupe-docum.component.html',
  styleUrls: ['./groupe-docum.component.css']
})
export class GroupeDocumComponent implements OnInit {
  @ViewChild(MatSort) Sort: MatSort;
  @ViewChild(MatPaginator) Paginator: MatPaginator;
  displayedColumns: string[] = ['libelle','actions'];
  grpdoc = new GroupsDoc();
 grbdocTable:MatTableDataSource<GroupsDoc>
  searchKey: String;
  constructor(private grpsDocument:GroupsDocService) { }

  ngOnInit() {
   this.OnGetOngrpsDoc();
  }

  applyFilter() {
    this.grbdocTable.filter = this.searchKey.trim().toLowerCase()}

  OnGetOngrpsDoc(){
    this.grpsDocument.getAllGroupsDoc().subscribe(value => {
      this.grbdocTable=new MatTableDataSource<GroupsDoc>(value);
      this.grbdocTable.sort = this.Sort;
      this.grbdocTable.paginator= this.Paginator;
    },err=>{
      console.log(err)
    })
  }

  onEdit(row){}



  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

}
