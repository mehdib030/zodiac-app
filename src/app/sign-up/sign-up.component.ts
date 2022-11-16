import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

import { IUser, CognitoService } from '../cognito.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService, public dialogService: DialogService, private messageService: MessageService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
     // this.router.navigate(['/signIn']);
      const ref = this.dialogService.open(SignInComponent, {
        header: 'Sign-Up',
        width: '25%',
        modal:true
    });
        ref.onClose.subscribe(() => {
          console.log('Closed ...');
          this.messageService.add({severity:'success', summary: 'Success', detail:'Your registraion was successful.'});
      });
    }).catch(() => {
      this.loading = false;
    });
  }

}