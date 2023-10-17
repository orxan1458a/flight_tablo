import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureComponent } from './departure/departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { Route, RouterModule } from '@angular/router';
import { NotFoundError } from 'rxjs';


const rootconfig:Route[]=[
  {path:'departure',component:DepartureComponent},
  {path:'arrival',component:ArrivalComponent},
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rootconfig)
  ]
})
export class AppRoutingModule { }
