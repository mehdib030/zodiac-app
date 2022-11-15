import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Request } from '../model/request.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
 // private bucket: S3Client;

  constructor(private http:HttpClient) { 
  }

  private get httpOptions(){
    return {headers: new HttpHeaders({'content-type':'application/json'})}
  }

 /* constructor() { 
    this.bucket = new S3Client(
      {
        credentials: {
          accessKeyId: environment.AWS_ACCESS_KEY_ID,
          secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
          sessionToken: environment.AWS_SESSION_TOKEN
        },
        region: environment.AWS_REGION,
      }
    );
  }*/

  getAllrequests(){
    const url = `${environment.API_REQUEST_URL}`;
    return this.http.get<Request[]>(url,this.httpOptions);
  }

  getRequestsByUUID(uuid:string){
    const url = `${environment.API_REQUEST_URL}`;
    return this.http.get<Request[]>(url+'/'+uuid,this.httpOptions);
  }

  getRequestsByRequestorId(requestorId:number){
    const url = `${environment.API_REQUEST_URL}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-type':'application/json','Accept': 'application/json'}),
      params :  new HttpParams().set('requestorId',requestorId)
  }
    return this.http.get<Request[]>(url,httpOptions);
  }

  getRequestsByRequestId(requestId:number){
    const url = `${environment.API_REQUEST_URL}`;
    return this.http.get<Request[]>(url+'/'+requestId,this.httpOptions);
  }

  createRequest(request:Request){
    const url = `${environment.API_REQUEST_URL}`;
    console.log('REQUEST in SERVICE = ',request)
    return this.http.post(url,request,this.httpOptions);
  }

  updateRequest(request:Request){
    const url = `${environment.API_REQUEST_URL}`;
    return this.http.put(url,request,this.httpOptions);
  }

  uploadFile(file:File,username:string, uuid:string){
    
    const url = `${environment.API_UPLOAD_URL}`;
    console.log('URL = ',url+'/'+file)
    this.uploadToS3(file,username,uuid,url);
  }

  uploadToS3 = async (file:File,username:string,uuid:string,url:string) => {
    if (!file) {
      console.log('No file to upload');
      return;
    }
    
   let presignedUrl:string='';

   let data ={
    "uuid":uuid,
    "username": username,
    "filename":file.name
   }

   const httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
   
   }

   const httpOptionsExcel = {
    headers: new HttpHeaders({'Content-type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
   
  }
   
   this.http.post<string>(url,data, httpOptions).subscribe({
      next: url => {
        presignedUrl = url;
        console.log("*******Presigned url = ",url);
        this.http.put(url,file,httpOptionsExcel).subscribe({
          next: data => console.log(data),
          error: error => console.log(error)
        });
      },
      error: error => console.log(error)
    });
  
  };

 /* async uploadFile(file: File) {

    const params = {
      Bucket: 'bucket2-team5',
      Key: 'famous_people/mb/'+file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: file.type
    };

    try {
      const response = await this.bucket.send(new PutObjectCommand(params));
      console.log("SUCCESS", response);
    } catch(error) {
      console.log("FAILURE", error);
    }
   
  }*/
}
