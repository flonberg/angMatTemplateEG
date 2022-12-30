import { genPeople } from './../gen.service';
import { Component, OnInit } from '@angular/core';
import { GenService } from '../gen.service';

@Component({
  selector: 'app-from-ion',
  templateUrl: './from-ion.component.html',
  styleUrls: ['./from-ion.component.css']
})
export class FromIONComponent  {

  constructor( private genSvce: GenService) {}

  IonData:any                                         // will hold data from ION
  inpStr: string;
  dataLength: number;
  colList: string[]
  setSelStr($ev){
    console.log("string is %o", $ev.target.value)
    this .inpStr = $ev.target.value
    this .genSvce.getIONdata($ev.target.value).subscribe(res=>{             
      this .IonData = res;
      
      console.log("fromION is %o", this .IonData)
    })
  }
  whatKind(){
    if (this .inpStr && this .inpStr.includes('DESCRIBE'))
      return 1
    if (this .inpStr && this .inpStr.includes('SELECT'))
      return 0  
  }

  addColToList(val){

  }

}
