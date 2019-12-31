import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Feedback } from '../feedback'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errorMsg: any;
  submitted: boolean;
  loading: boolean;
  deps: any = ['IT', 'Core Network', 'Maintenance', 'Access Network', 'Human Resources', 
               'Finance', 'Customer Care', 'Administration', 'Marketing'];
  feedback: Feedback;
  constructor(private restService: RestService) { }


  //this is a comment 
  
  onSubmit(data){
    this.loading = true
    console.log("Form value", data.value)
    this.restService.postFeedback(data.value)
      .subscribe(res => {
        this.loading = false;
        console.log("Submitted form response: ", res)
        JSON.stringify(res)
      },
      error => {
        this.loading = false;
        this.errorMsg = true;
        this.errorMsg = error["errorMessage"];
        console.log("Leads component error", error["errorMessage"]);
      })
      data.reset()
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
