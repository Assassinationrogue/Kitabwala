import { FieldConfigService } from './../../services/field-config.service';
import { WidgetField, Fields } from './../../models/public.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  signupFormFields: Fields;
  loginFormFields: Fields;
  constructor(private fieldConfig: FieldConfigService) { }

  ngOnInit(): void {
    this.getFieldConfig();
  }

  /**
   * Gets field configuration
   */
  private getFieldConfig(){
    
  }

}
