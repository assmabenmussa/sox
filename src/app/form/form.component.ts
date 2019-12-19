import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private restService: RestService) { }

  submitted: boolean;
  feedbackOut: Feedback[] = []
    
  
  onSubmit(data){
    this.submitted = true
    console.log("Form value", data.value)
    this.restService.postFeedback(data.value)
      .subscribe(res => {
        console.log("Submitted form response: ", res)
      })
  }
  
  // getAll(){
  //   this.restService.getF()
  //   .subscribe(res =>{
  //     console.log("response: ", res)
  //     this.feedbackOut = res[0]["feedback"];
  //   })
  // }

  ngOnInit() {
    // this.getAll();
  }
  
}
