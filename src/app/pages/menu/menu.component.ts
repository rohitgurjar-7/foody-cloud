import { Component, OnInit } from '@angular/core';

import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { foodModel } from './food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

foodModelObj: foodModel = new foodModel();
foodData:any;
  constructor(private api:OrderDetailsService) { }

  ngOnInit(): void {
    
    
   this.getAllFood();
   
  }
  
  getAllFood(){
    this.api.getfood("http://localhost:4200/menu/")
    .subscribe(res=>{
      this.foodData=res;
    })
  }

}
