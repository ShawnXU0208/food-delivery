import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormAlertsService } from '../../services/form-alerts.service';

@Component({
  selector: 'app-form-alerts',
  templateUrl: './form-alerts.component.html',
  styleUrls: ['./form-alerts.component.css']
})
export class FormAlertsComponent implements OnInit {

  message: any;
  cssClass;
  private subscription: Subscription;

  constructor(private formAlertsService: FormAlertsService) { }

  ngOnInit() {
    this.subscription = this.formAlertsService.getAlert()
      .subscribe(message =>{

        this.message = message;

        switch(message.type){
          case 'success':
            this.cssClass = "alert alert-success";
            break;
           case 'error':
             this.cssClass = "alert alert-danger";
             break;
        }
      });
  }

}
