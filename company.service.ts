import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Positions } from '../model/positions';
import { Candidate } from '../model/candidate';
import { Company } from '../model/company';


const headeroption = {
headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private router: Router) { }
  // url='http://ec2-52-33-46-212.us-west-2.compute.amazonaws.com:8080/rest/api';
   url='http://localhost:8085/rest/api';
 comp : Company =
 {
  id:null,
  companyName:'',
  positionName:'',
  Name:'',
  Mobile:'',
  Experience:'',
  CurrentCTC:'',
  ExpectedCTC:'',
  NoticePeriod:'',
  Remark:''
  

  //positions1:[]
};

compPos : Positions =
{

  positionId:null,
  positionName:'',
  //candidate:[]
  Name:'',
  Mobile:'',
  Experience:'',
  CurrentCTC:'',
  ExpectedCTC:'',
  NoticePeriod:'',
  Remark:'',
  positions1:''

};

posCan : Candidate =
{
 
candidateId:null,
Name:'',
  Mobile:'',
  Experience:'',
  CurrentCTC:'',
  ExpectedCTC:'',
  NoticePeriod:'',
  Remark:''


}

getAllCompanies() : Observable<Company[]>
{
 
return this.http.get<Company[]>(this.url + '/' + 'getCompanyList' , headeroption);
}

getPositionList(id : number): Observable<Positions[]>
{
 
  return this.http.get<Positions[]>(this.url + '/' + 'getAllPositionsOfCompany/' + id);
 
}

getCandidates(positionId : number): Observable<Candidate[]>
{
  return this.http.get<Candidate[]>(this.url + '/' + 'getAllCandidatesOfPosition/' + positionId);
}

addCompany(newComp: Company) {
 
  //console.log(newComp);
  return this.http.post(this.url + '/' + 'addCompany', newComp, headeroption);
}

addPosition(newPos: Company) {
 
  //console.log(newPos);
  return this.http.put(this.url + '/' + 'updateCompany', newPos, headeroption);
}



addCandidate(newPos: Company) {
 
  console.log(newPos);
  return this.http.put(this.url + '/' + 'updatePosition', newPos, headeroption);
}




}
