import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Feedback } from '../feedback';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
    
  }

  url = 'https://dry-shelf-17630.herokuapp.com/api'; //heroku backend 
  // url = 'http://127.0.0.1:5000/api';

  public postFeedback(feedback: Feedback){
    let data = new FormData;
    data.append("dep", feedback.dep);
    data.append("feedback", feedback.feedback);
    return this.http.post(`${this.url}/email`, data);
  }
}
