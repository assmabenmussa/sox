import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Feedback } from '../feedback';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
    
  }

  url = 'http://127.0.0.1:5000/api';

  public postFeedback(feedback: Feedback){
    console.log("Service exectuting", feedback)
    return this.http.get(`${this.url}/email?feedback=${feedback.feedback}`);
  }
  // public getF(){
  //   return this.http.get<Feedback>(`${this.url}/send`)
  // }
}
