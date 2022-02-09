import { Status } from './../models/public.interface';
import { NewRegisteration } from '../models/public.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterationService {
  /**
   * Path to api
   */
  private apiUrl: String = environment.apiUrl;
  private apiPort: number = environment.apiPort;
  private publicUrl: string = environment.apiPublic;

  constructor(private http: HttpClient) {}

  /**
   * Posts new registeration data of the user
   * @param RegisterationData accepts the value
   * @returns Status
   */
  postSignupCredentials(
    RegisterationData: NewRegisteration
  ): Observable<Status> {
    return this.http.post<Status>(
      `${this.apiUrl}:${this.apiPort}${this.publicUrl}/newRegisteration`,
      RegisterationData
    );
  }
}
