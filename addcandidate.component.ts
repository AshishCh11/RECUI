import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { Positions } from '../model/positions';
import { CompanyService } from '../Service/company.service';
import { Router } from '@angular/router';
import { MatOptionSelectionChange } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {

  allCompany:Company[];
  allPositions:Positions[];
//allCandidates:Candidate[];
addCandidate: FormGroup;
submitted = false;

  constructor(private fb: FormBuilder,private companyservice : CompanyService, private router:Router) {
    this.addCandidate = this.fb.group({
      id: ['', Validators.required],
      positionId: [null, Validators.required],
      //positionName: ['', Validators.required],
      Name: [null, Validators.required],
      Mobile: [null, Validators.required],
      Experience: [null, Validators.required],
      CurrentCTC: [null, Validators.required],
      ExpectedCTC: [null, Validators.required],
      NoticePeriod: [null, Validators.required],
      Remark: [null, Validators.required]
    });

   }

  ngOnInit() {
   this.getAllCompanies();
  }

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
//console.log(data);
if(data){
//console.log(data);

var dataList = data.positions1;
//console.log(dataList);
this.allPositions=dataList;

}
});
}

saveCandidate(newCan)
{

newCan = {
  "positionId": this.addCandidate.value.positionId,
         "candidates": [
              {
              "name":this.addCandidate.value.Name,
              "mobile":this.addCandidate.value.Mobile,
              "experience":this.addCandidate.value.Experience,
              "currentCTC":this.addCandidate.value.CurrentCTC,
              "expectedCTC":this.addCandidate.value.ExpectedCTC,
              "noticePeriod":this.addCandidate.value.NoticePeriod,
              "remark":this.addCandidate.value.Remark,
              }   	]
              }

              //console.log(newCan);
             this.companyservice.addCandidate(newCan).subscribe((data) => {
       
             });


}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.addCandidate.invalid) {
      return;
  }

  alert('SUCCESS!! :-)')
}



}