import { Component, OnInit } from '@angular/core';
import { Aviation } from '../Aviation';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent{

  public DataList: Aviation[] = [];

  constructor(private service: DataserviceService) {
    this.service.getDatas().subscribe((res: any) => {
      console.log(res);
      this.DataList = res.data;
     
    });
  }

}
