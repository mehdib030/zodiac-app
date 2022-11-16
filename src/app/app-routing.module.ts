import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const  routes: Routes = [
  { path: 'new-request', component: NewRequestComponent },
  { path: 'edit-request', component: EditRequestComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'edit-contact', component: EditContactComponent },
  /*{
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },*/
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
 /* {
    path: '**',
    redirectTo: 'signIn',
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
