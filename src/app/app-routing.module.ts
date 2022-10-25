import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { NewRequestComponent } from './new-request/new-request.component';

const  routes: Routes = [
  { path: 'new-request', component: NewRequestComponent },
  { path: 'edit-request', component: EditRequestComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'update-contact', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
