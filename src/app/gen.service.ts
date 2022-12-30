import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export interface genPeople{
  FirstName: string;
  LastName: string;
  UserKey: number;  
  Email: string;
  Rank: number;
  Initials: string;
  service: number;
  id: number;
  pid: number;
  insID: number;
}
@Injectable({
  providedIn: 'root'
})

export class GenService {

  constructor(private http: HttpClient) { }

  getIONdata(params?): Observable<genPeople>{  
    let jArray = {params} 
    let jArgs = JSON.stringify(params)     
    console.log("2626 jArgs %o", jArgs)
    let url = "http://blackboard-dev.partners.org/dev/JingBB/getFromIonClassJingFL.php"
        return this .http.post<genPeople>(url, jArgs)
  }  
}
