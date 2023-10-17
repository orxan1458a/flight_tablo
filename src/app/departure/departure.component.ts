import { Component, Input, OnInit } from '@angular/core';
import { Aviation } from '../Aviation';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent {

 
 
  public DataList: Aviation[] = [];

  constructor(private service: DataserviceService) {
    this.service.getDatas().subscribe((res: any) => {
      console.log(res);
      this.DataList = res.data;
     
    });
  }
  

}
