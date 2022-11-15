import { Component, OnInit } from '@angular/core';
import { Request } from '../model/request.model';
import { UploadService } from '../new-request/upload.service';
import { ContactService } from '../edit-contact/contact.service';
import { Requestor } from '../model/requestor-entity.model';


@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss'],
  //providers:[ContactService]
})
export class EditRequestComponent implements OnInit {

  first = 0;
  rows = 5;
  requests: Request[]=[];
  requestor!:Requestor;
  requestors:Requestor[]=[];
  username:string='mb';

  constructor(private uploadService:UploadService, private contactService:ContactService) { }

  ngOnInit(): void {

    this.contactService.getRequestorByUserName(this.username).subscribe({
      next: requestors => {
        this.requestors = requestors;
        this.uploadService.getRequestsByRequestorId(this.requestors[0].requestor_id).subscribe({
          next: requests => this.requests = requests,
          error: error => console.log('Error',error)
        });
       },
       error: error => console.log('Error',error)
      }
    );

   

    /* this.requests = [
      {requestId:'1a2b3c4', contacts:[{email:'John.Smith@gmail.com'}], famousPeople:'Gerard Depardieu',status:'Completed'},
      {requestId:'5r6g67b', contacts:'mark.anderson@gmail.com, bob.wayne@gmail.com', famousPeople:'Al Pacino, Robert Deniro',status:'Completed'},
      {requestId:'m78bn45', contacts:'bob.wayne@gmail.com', famousPeople:'Yves Montand, Eleanor Rosssevelt',status:'Completed'},
      {requestId:'4ds3rg4', contacts:'Jane.Doe@gmail.com, bob.wayne@gmail.com', famousPeople:'George Washington, Abraham Lincoln',status:'Completed'},
      {requestId:'ny4523s', contacts:'Jane.Doe@gmail.com,Jane.Doe@gmail.com, bob.wayne@gmail.com', famousPeople:'Mark Twain, Grace Hopper, James Dean',status:'Completed'},
      
    ]*/
  }

onRowEditInit(request: Request) {
   // this.clonedProducts[product.id] = {...product};
}

onRowEditSave(request: Request) {
    console.log('Updated request : ',request);
    this.uploadService.updateRequest(request).subscribe({
      next: data => console.log(data),
      error: error => console.log(error)
    });

   // if (product.price > 0) {
        //delete this.clonedProducts[product.id];
       // this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
   // }
  //  else {
      //  this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
   // }
}

onRowEditCancel(request: Request, index: number) {
   // this.products2[index] = this.clonedProducts[product.id];
   // delete this.clonedProducts[product.id];
}


}
