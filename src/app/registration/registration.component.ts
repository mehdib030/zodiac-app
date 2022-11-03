import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { Registration } from '../model/registration.model';
import { RegistrationService } from './registration.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [DialogService,MessageService,]
})
export class RegistrationComponent implements OnInit {

  registration!: Registration;

  registrationFormGroup!: FormGroup;

  constructor(public dialogService: DialogService,  public ref: DynamicDialogRef, private registrationService:RegistrationService, 
    private builder:FormBuilder, private messageService: MessageService) {
    this.registrationFormGroup =  this.builder.group({
      registration: this.builder.group({
        firstName:[''],
        lastName:[''],
        email:['']
      })
    })
  }

  ngOnInit(): void {
  }

  createRegistration(){

    let firstName = this.registrationFormGroup.get('registration')!.value.name;
    console.log('First Name = ', firstName);

    let lastName = this.registrationFormGroup.get('registration')!.value.name;
    console.log('First Name = ', lastName);

    let email = this.registrationFormGroup.get('registration')!.value.email;
    console.log('EMAIL = ', email);

      this.registrationService.createRegistration(this.registrationFormGroup.get('registration')!.value).subscribe({
        next: data  => {
          console.log("Registration Creation Successful");
          //this.messageService.add({severity:'success', summary: 'Success', detail:'Your registraion was successful.'});
          this.close();
        },
        error: error => {
            console.log("Error");
        }
      })
  }

  close(){
    this.ref.close();
  }
}
