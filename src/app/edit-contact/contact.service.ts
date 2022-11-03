import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact } from '../model/contact.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private get httpOptions(){
    return {headers: new HttpHeaders({'content-type':'application/json'})}
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
}
