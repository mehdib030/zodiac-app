import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  first = 0;
  rows = 4;
  contacts:Contact[]=[];

  constructor() { }

  ngOnInit(): void {
    this.contacts = [
      { name:'John Smith', email:'John.Smith@gmail.com'},
      { name:'Mark Anderson',email:'mark.anderson@gmail.com, mark_anders@hotmail.com'},
      { name:'Bob Wayne',email:'bob.wayne@gmail.com' },
      { name:'Jane Doe',email:'Jane.Doe@gmail.com'}
    ]
  }

  onRowEditInit(contact: Contact) {
    // this.clonedProducts[product.id] = {...product};
 }
 
 onRowEditSave(contact: Contact) {
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
 

}
