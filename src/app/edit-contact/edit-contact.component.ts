import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../model/contact.model';
import { Request } from '../model/request.model';
import { Requestor } from '../model/requestor-entity.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit,OnDestroy {

  first = 0;
  rows = 4;
  contacts:Contact[]=[];
  contactSubscription!: Subscription;
  requestor!:Requestor;
  requestorSubscription!:Subscription;

  constructor(private contactsService:ContactService) { }

  ngOnInit(): void {

    /*this.requestorSubscription = this.contactsService.getRequestorByUserName('mb').subscribe({
      next: requestor => this.contacts=this.requestor.contacts,
      error: error => console.log(error)
    });*/
    this.contactSubscription = this.contactsService.getContacts().subscribe({
        next: contacts =>  this.contacts = contacts,
        error: error => console.log(error)
    })
    
    
    // this.contacts = [
    //   { name:'John Smith', email:'John.Smith@gmail.com'},
    //   { name:'Mark Anderson',email:'mark.anderson@gmail.com, mark_anders@hotmail.com'},
    //   { name:'Bob Wayne',email:'bob.wayne@gmail.com' },
    //   { name:'Jane Doe',email:'Jane.Doe@gmail.com'}
    // ]
  }

  onRowEditInit(contact: Contact) {
    // this.clonedContacts[contact.id] = {...product};
 }
 
 onRowEditSave(contact: Contact) {

    console.log('Saving contact ... ');
    console.log('First Name: ',contact.firstName);
    console.log('Last Name: ',contact.lastName);
    console.log('Email: ',contact.email);
    contact.requestor_requestor_id=this.requestor.requestor_id;
    this.contactSubscription = this.contactsService.createContact(contact).subscribe({
      next: data  => {
        console.log("Contact added successfully");
      },
      error: error => {
          console.log("Error");
      }
    });
    // if (product.price > 0) {
         //delete this.clonedProducts[product.id];
        // this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    // }
   //  else {
       //  this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    // }
 }
 
 onRowEditCancel(contact: Contact, index: number) {
    // this.products2[index] = this.clonedProducts[product.id];
    // delete this.clonedProducts[product.id];
 }

 newRow() {
  return { firstName: '', lastName:'', email: '' };
}

ngOnDestroy(): void {
  this.requestorSubscription?.unsubscribe();
  this.contactSubscription?.unsubscribe();
}

}
