import { Component, OnInit } from '@angular/core';
import { Requestor } from '../model/requestor-entity.model';
import { Observable } from 'rxjs';
//import * as Excel from 'exceljs';
import { read, utils, writeFileXLSX,readFile,WorkBook, WorkSheet } from 'xlsx'; 

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {


  title = 'zodiac';
  arrayBuffer: any;
  exceljsondata: any;
  file:any;
  uploadEvent:any;
  data:any;
  uploadedFiles: any[] = [];
  requestors: Requestor[] = [];
  selectedRequestors: Requestor[] = [];
  constructor() { }

  ngOnInit(): void {
    this.requestors = [
      {name:'Scotte Dodd',email:'aa'},
      {name:'Tony Ngo',email:'aa'},
      {name:'Ashfaq Ahmed',email:'aa'},
      {name:'Ethan Hale',email:'aa'},
      {name:'Mehdi Benyebka',email:'aa'}
     ]
  }

  onSelectFile(event:any){
    console.log('Parsing Selected File');

    if (event.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: WorkBook = read(ab, {
        type: "binary",
        cellDates: true,
        cellNF: false,
        cellText: false
      });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = utils.sheet_to_json(ws, {header: 1,raw:false,dateNF:'mm/dd'});
      console.log(this.data[1]);
      console.log(this.data);
    };
    reader.readAsArrayBuffer(event.files[0]);
  }

  onChange(event:any){
    console.log('Selected requestors');
    console.log(event.value);
  }

  submitRequest(){
    
  }

}
