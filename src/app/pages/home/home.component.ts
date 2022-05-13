import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { foodModel } from '../menu/food';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foodmodel?:foodModel;

foodData:any;
  constructor(private api:OrderDetailsService,private htttp:HttpClient) { }

  ngOnInit(): void {
   this.api.foodData=this.foodmodel;
   this.getAllFood();
  }

  getAllFood(){
    this.api.getfood("http://localhost:4200/menu/")
    .subscribe(res=>{
      this.foodData=res;
    })
  }
}
