import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact } from '../model/contact.model';
import { map } from 'rxjs';
import { Requestor } from '../model/requestor-entity.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private get httpOptions(){
    return {
      headers: new HttpHeaders({'content-type':'application/json'})
    }
  }

  constructor(private http:HttpClient) { }

  createContact(contact:Contact){
    const url = `${environment.API_CONTACTS_URL}`;
    return this.http.post(url,contact,this.httpOptions);
  }

  getContacts(){
    const url = `${environment.API_CONTACTS_URL}`;
    return this.http.get<Contact[]>(url,this.httpOptions);
  }

  getContactsByRequestorId(requestorId:number){
    const url = `${environment.API_CONTACTS_URL}`;
    return this.http.get<Contact[]>(url+'?requestorId='+requestorId,this.httpOptions);
  }

  getRequestorByUserName(username:string){
    const url = `${environment.API_REQUESTOR_URL}`;
    const httpOptions = {
        headers: new HttpHeaders({'Content-type':'application/json','Accept': 'application/json'}),
        params :  new HttpParams().set('username',username)
    }
    
    return this.http.get<Requestor[]>(url,httpOptions);
  }

  getAllRequestors(){
    const url = `${environment.API_CONTACTS_URL}`;
    return this.http.get<Requestor>(url,this.httpOptions);
  }
}
