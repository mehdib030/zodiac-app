import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registration } from '../model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  private get httpOptions(){
    return {headers: new HttpHeaders({'content-type':'application/json'})}
  }

  createRegistration(registration:Registration){
    const url = `${environment.API_REGISTRATION_URL}`;
    return this.http.post(url,registration,this.httpOptions);
  }
}
