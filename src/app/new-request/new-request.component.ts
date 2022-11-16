import { Component, OnInit } from '@angular/core';
import { Requestor } from '../model/requestor-entity.model';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
import { ContactService } from '../edit-contact/contact.service';
import { Contact } from '../model/contact.model';
import { v4 as uuidv4 } from 'uuid';
//import * as Excel from 'exceljs';
//import { read, utils, writeFileXLSX,readFile,WorkBook, WorkSheet } from 'xlsx'; 

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  title = 'zodiac';
  arrayBuffer: any;
  exceljsondata: any;
  file:any;
  uploadEvent:any;
  data:any;
  uploadedFiles: any[] = [];
  requestors: Requestor[] = [];
  selectedContacts: Contact[] = [];
  requestor!:Requestor;
  contacts!:Contact[]
  username:string='mb';

  constructor(private uploadService:UploadService, private contactService:ContactService) { }

  ngOnInit(): void {
    //TODO: get user name form id token and pass it to this api call
    this.contactService.getRequestorByUserName(this.username).subscribe({
      next: requestors =>  {
        this.requestors = requestors;
        console.log('Requestor Array:',this.requestors[0]);
        console.log('Requestor Id: ',this.requestors[0].requestor_id);
        let requestorId = this.requestors[0].requestor_id;
        this.contactService.getContactsByRequestorId(requestorId).subscribe({
          next: contacts => this.contacts=contacts,
          error: error => console.log('Error: ',error)
        })
      },
      error: error => console.log('Error: ',error)
    });

  }

  onSelectFile(event:any){
    console.log('Uploading File to S3 ...');

    let newRequest = {
        request_id:-1,
        uuid : uuidv4(),
        status: 'received',
        requestor_requestor_id:this.requestors[0].requestor_id,
        contacts: this.selectedContacts
    };
   console.log('New Request = ',JSON.stringify(newRequest));
    this.uploadService.createRequest(newRequest).subscribe({
        next: data => {
           console.log(data);
           this.uploadService.uploadFile(event.files[0],this.username,newRequest.uuid);
        },
        error:error => console.log(error)
    })
    
  /*  .subscribe({
      next: data  => {
        console.log("File upload successfully");
      },
      error: error => {
          console.log("Error");
      }
    });;*/

  }

  onChange(event:any){
    console.log('Selected requestors');
    console.log(event.value);
  }

  isDisabled(event:any){
     //console.log('Disabled');
     return  this.data == null || this.selectedContacts == null;
     //return false;
  }

  submitRequest(event:any){
    console.log('Disabled');
  }

}

    // if (event.files.length !== 1) throw new Error('Cannot use multiple files');
    // const reader: FileReader = new FileReader();
    // reader.onload = (e: any) => {
    //   /* read workbook */
    //   const ab: ArrayBuffer = e.target.result;
    //   const wb: WorkBook = read(ab, {
    //     type: "binary",
    //     cellDates: true,
    //     cellNF: false,
    //     cellText: false
    //   });

    //   /* grab first sheet */
    //   const wsname: string = wb.SheetNames[0];
    //   const ws: WorkSheet = wb.Sheets[wsname];

    //   /* save data */
    //   this.data = utils.sheet_to_json(ws, {header: 1,raw:false,dateNF:'mm/dd'});
    //   console.log(this.data[1]);
    //   console.log(this.data);
    // };
    // reader.readAsArrayBuffer(event.files[0]);

    
   /* this.requestors = [
      {requestorId:1,first_name:'Scotte',last_name:'Dodd',email:'aa', username:'sd',contacts:[]},
      {requestorId:2,first_name:'Tony',last_name:'Ngo',email:'aa', username:'tn',contacts:[]},
      {requestorId:3,first_name:'Ethan',last_name:'Hale',email:'aa', username:'eh',contacts:[]},
      {requestorId:4,first_name:'Ahmed',last_name:'Ashfaq',email:'aa', username:'aa',contacts:[]},
      {requestorId:5,first_name:'Mehdi',last_name:'Benyebka',email:'aa', username:'mb',contacts:[]}
     ]*/