import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import {DialogService} from 'primeng/dynamicdialog';
import { Registration } from '../model/registration.model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [DialogService]
})
export class RegistrationComponent implements OnInit {

  registration!: Registration;

  registrationFormGroup!: FormGroup;

  constructor(public dialogService: DialogService,private registrationService:RegistrationService, private builder:FormBuilder) {
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
        },
        error: error => {
            console.log("Error");
        }
      })
  }
}
