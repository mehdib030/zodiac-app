import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
//import * as Excel from 'exceljs';
import { read, utils, writeFileXLSX,readFile,WorkBook, WorkSheet } from 'xlsx'; 
import { Requestor } from './model/requestor-entity.model';
import {MenuItem} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import { RegistrationComponent } from './registration/registration.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'zodiac';
  arrayBuffer: any;
  exceljsondata: any;
  file:any;
  uploadEvent:any;
  data:any;
  uploadedFiles: any[] = [];
  requestors: Requestor[] = [];
  selectedRequestors: Requestor[] = [];
  items: MenuItem[]=[];

  constructor(public dialogService: DialogService) {}

  ngOnInit() : void{
     console.log('Parse Excel File');

    

     this.items = [
      {
          label: 'Request',
          items: [{
                  label: 'New Request', 
                  icon:'pi pi-fw pi-plus',
                  routerLink:['new-request']
              },{
                  label: 'Edit Request', 
                  icon:'pi pi-fw pi-pencil',
                  routerLink:['edit-request']
              }
          ]},
          {
          label: 'Contacts',
          items:[{
            label: 'New Contact(s)', 
                  icon:'pi pi-fw pi-plus',
                  routerLink:['add-contact']
              },{
                  label: 'Edit Contact(s)', 
                  icon:'pi pi-fw pi-pencil',
                  routerLink:['update-contact']
          }]
      },
      {
      label: 'File',
      items:[{
        label: 'New File', 
              icon:'pi pi-fw pi-plus',
              routerLink:['new-file']
          },{
              label: 'Edit File', 
              icon:'pi pi-fw pi-pencil',
              routerLink:['edit-file']
      }]
     }
  ];

  }

  register(){
    const ref = this.dialogService.open(RegistrationComponent, {
      header: 'Sign-Up',
      width: '25%',
      modal:true
  });
  }
}
