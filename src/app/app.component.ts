import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
//import * as Excel from 'exceljs';
//import { read, utils, writeFileXLSX,readFile,WorkBook, WorkSheet } from 'xlsx'; 
import { Requestor } from './model/requestor-entity.model';
import {MenuItem} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import { RegistrationComponent } from './registration/registration.component';
import { Router } from '@angular/router';
import { CognitoService } from './cognito.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
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
  isAuthenticated!: boolean;

  constructor(private router: Router,
    private cognitoService: CognitoService, public dialogService: DialogService, private messageService: MessageService) {}

  

  ngOnInit() : void{

     this.cognitoService.isAuthenticated()
    .then((success: boolean) => {
      this.isAuthenticated = success;
    });
    

     this.items = [
     
          {
          label: 'Contacts',
          items:[{
            label: 'Add/Edit Contact(s)', 
                  routerLink:['edit-contact']
              }]
      },
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
          ]}
  ];
  }

  register(){
    const ref = this.dialogService.open(SignUpComponent, {
      header: 'Sign-Up',
      width: '25%',
      modal:true
  });
      ref.onClose.subscribe(() => {
        console.log('Closed ...');
        this.messageService.add({severity:'success', summary: 'Success', detail:'Your registraion was successful.'});
    });
}

signIn(){
  const ref = this.dialogService.open(SignInComponent, {
    header: 'Sign-Up',
    width: '25%',
    modal:true
});
    ref.onClose.subscribe(() => {
      console.log('Closed ...');
      this.messageService.add({severity:'success', summary: 'Success', detail:'Your registraion was successful.'});
  });
}


  
public signOut(): void {
  this.cognitoService.signOut()
  .then(() => {
    this.router.navigate(['/signIn']);
  });
}

}

// {
//   label: 'File',
//   items:[{
//     label: 'New File', 
//           icon:'pi pi-fw pi-plus',
//           routerLink:['new-file']
//       },{
//           label: 'Edit File', 
//           icon:'pi pi-fw pi-pencil',
//           routerLink:['edit-file']
//   }]
//  },
