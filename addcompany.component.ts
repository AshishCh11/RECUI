import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Service/company.service';
import { Router } from '@angular/router';
import { Company } from '../model/company';




@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor(private companyservice: CompanyService, private router: Router) { }

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
  }

  saveCompany(addComp: Company) {
  
  this.companyservice.addCompany(addComp).subscribe((data) => {
       console.log(addComp);
    });
      }

    cancel() {
//console.log("hii");
      this.router.navigate(['/']);
     
    }
  

  }

 