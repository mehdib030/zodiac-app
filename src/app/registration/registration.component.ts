import { Component, OnInit } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [DialogService]
})
export class RegistrationComponent implements OnInit {
  
  name:string=''
  email:string=''

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
  }

}
