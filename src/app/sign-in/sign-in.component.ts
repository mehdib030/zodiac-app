import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  loading: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService,public dialogService: DialogService, private messageService: MessageService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
    .then(() => {
      //this.router.navigate(['/profile']);
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