import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Feedback } from '../feedback'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @ViewChild('openModal', {static: false}) openModal : ElementRef<HTMLElement>;
  
  errorMsg: string = undefined;
  successMsg: string = undefined;

  toggleReceiveReply: boolean = false;
  submitted: boolean;
  loading: boolean;

  deps: any = ['IT', 'core', 'Maintenance', ' Access Network', 'الموارد البشرية', 
               'المالية', 'خدمات المشتركين', 'الادارة', 'التسويق', 'المبيعات', 'علم البيانات', 'أفضل عدم الإفصاح'];
  feedback: Feedback;
  constructor(private restService: RestService) { }
  
  ngOnInit() {
  }

  ngAfterViewInit(){
    this.clickBtn();
  }

  clickBtn(){
    this.openModal.nativeElement.click();
  }

  onSubmit(data){
    this.loading = true
    this.restService.postFeedback(data.value)
      .subscribe(res => {
        this.loading = false;
        this.successMsg = res["message"];
        data.reset();
      }, error => {
        console.warn("onSubmit ", error);
        this.loading = false;
        this.errorMsg = error["errorMessage"];
      })
  }
  
  
}
