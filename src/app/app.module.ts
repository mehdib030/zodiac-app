import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import {HttpClientModule} from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { NewRequestComponent } from './new-request/new-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {TableModule} from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { AddRowDirective } from './directives/add-row.directive';
import { AddFileComponent } from './add-file/add-file.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRequestComponent,
    EditRequestComponent,
    RegistrationComponent,
    AddContactComponent,
    EditContactComponent,
    AddRowDirective,
    AddFileComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    TabViewModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    DynamicDialogModule,
    CardModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
