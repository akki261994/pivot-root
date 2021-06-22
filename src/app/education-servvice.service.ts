import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationServviceService {

  constructor(private httpClient: HttpClient) { }
  endPoint = 'http://localhost:3004';
  getMonthly(){
    return this.httpClient.get(this.endPoint+"/monthly")
  }
  getYearly(){
    return this.httpClient.get(this.endPoint+"/yearly")
  }
}
