import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errorMsg: any;
  submitted: boolean;
  loading: boolean;

  constructor(private restService: RestService) { }


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
        this.errorMsg = error["statusText"];
        console.log("Leads component error", error["statusText"]);
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
