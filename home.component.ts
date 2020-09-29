import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Service/company.service';
import { Router } from '@angular/router';
import {Company } from '../model/company';
import { Positions } from '../model/positions';
import { Candidate } from '../model/candidate';
import { MatTableDataSource } from '@angular/material/table';
import { MatOptionSelectionChange, MatDialog } from '@angular/material';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { AddpositionComponent } from '../addposition/addposition.component';
import { AddcandidateComponent } from '../addcandidate/addcandidate.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCompany:Company[];
  allPositions:Positions[];
  CandidateList: Candidate[];

    displayedColumns: string[] = ['Name', 'Mobile', 'Experience','CurrentCTC','ExpectedCTC','NoticePeriod','Remark'];
    
  dataSource = new MatTableDataSource(this.CandidateList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   //console.log(this.CandidateList);
  }

  constructor(private companyservice : CompanyService, private router:Router,public dialog: MatDialog) { }

  opened: boolean;
  events: string[] = [];
  ngOnInit() {
    this.opened=true;
   this.getAllCompanies();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

 

  getAllCompanies()
  {
  this.companyservice.getAllCompanies().subscribe((data)=>{
   //console.log(data);
    this.allCompany=data;
   
  });
}

getAllPositions(event: MatOptionSelectionChange,id:number)
{
this.companyservice.getPositionList(id).subscribe((data)=>{

if(data){
//console.log(data);

var dataList = data.positions1;
//console.log(dataList);
this.allPositions=dataList;

}
});
}

candidateList(event: MatOptionSelectionChange, positionId:number){

  this.companyservice.getCandidates(positionId).subscribe((data) =>
  {
this.CandidateList= data;
//console.log(data);
var canList = data.candidates;
//console.log(canList);
this.CandidateList=canList;
console.log(this.CandidateList);
  });
  }

  openDialogCompany(): void {
    const dialogRef = this.dialog.open(AddcompanyComponent, {
      width: '450px',
     
    });
    }

    openDialogPosition(): void {
      const dialogRef = this.dialog.open(AddpositionComponent, {
        width: '500px',
       
      });
      }

      openDialogCandidate(): void {
        const dialogRef = this.dialog.open(AddcandidateComponent, {
          width: '500px',
         
        });
        }


       


}
