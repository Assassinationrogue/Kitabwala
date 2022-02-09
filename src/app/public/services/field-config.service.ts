import { WidgetField } from './../models/public.interface';

import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FieldConfigService {
  /**
   * Path to api
   */
  private apiUrl: String = environment.apiUrl;
  private apiPort: number = environment.apiPort;
  private publicUrl: string = environment.apiPublic;

  /**
   * Headers for the request
   */
  // private headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Access-Control-Allow-Origin', 'http://localhost:3000');

  constructor(private http: HttpClient) {}

  /**
   * Gets field configuration
   * @param none parameters are accepted
   * @returns Observable
   */
  getFieldConfiguration(): Observable<WidgetField> {
    return this.http.get<WidgetField>(
      `${this.apiUrl}:${this.apiPort}${this.publicUrl}/fieldConfig`
    );
  }
}
