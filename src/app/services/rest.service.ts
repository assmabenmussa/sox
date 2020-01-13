import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Feedback } from '../feedback';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
    
  }

  url = 'https://dry-shelf-17630.herokuapp.com/api';

  public postFeedback(feedback: Feedback){
    console.log("Service exectuting", feedback)
    return this.http.get(`${this.url}/email?dep=${feedback.dep}&feedback=${feedback.feedback}`);
  }
  // public getF(){
  //   return this.http.get<Feedback>(`${this.url}/send`)
  // }
}
