import { Component, OnInit } from "@angular/core";
import { CompanyService } from "../Service/company.service";
import { Router } from "@angular/router";
import { Positions } from "../model/positions";
import { Company } from "../model/company";
import { MatOptionSelectionChange } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-addposition",
  templateUrl: "./addposition.component.html",
  styleUrls: ["./addposition.component.css"]
})
export class AddpositionComponent implements OnInit {
  allCompany: Company[];
  //allPositions: Positions[];
  //addPosition : Company1[];
  addPosition: FormGroup;

  constructor( private fb: FormBuilder, private companyservice: CompanyService, private router: Router) 
  {
    this.addPosition = this.fb.group({
      id: ['', Validators.required],
      positionName: ['', Validators.required],
    });
   
  }

  pos: Positions =
  {
  
    positionId: null,
    positionName: '',
   // candidate:[]
   Name:'',
   Mobile:'',
   Experience:'',
   CurrentCTC:'',
   ExpectedCTC:'',
   NoticePeriod:'',
   Remark:'',
   positions1:''
  };

 

  comp: Company =
  {
    id: null,
    companyName: '',
    positionName:'',
    Name:'',
    Mobile:'',
    Experience:'',
    CurrentCTC:'',
    ExpectedCTC:'',
    NoticePeriod:'',
    Remark:''

  };


  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyservice.getAllCompanies().subscribe(data => {
      //console.log(data);
      this.allCompany = data;
    });
  }

  savePosition(newPos){
    //console.log(this.addPosition.value);
    
     newPos = { 
      "id" : this.addPosition.value.id ,
      "positions1" : [{"positionName" : this.addPosition.value.positionName} ] 
    } 
  
   this.companyservice.addPosition(newPos).subscribe((data) => {
       
   });
     }


    }
  
