import { WidgetField } from './../models/public.interface';
import { FieldConfigService } from './field-config.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditabilityResolver implements Resolve<WidgetField> {
  constructor(private fieldConfig: FieldConfigService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WidgetField> {
    return this.fieldConfig.getFieldConfiguration();
  }
}
