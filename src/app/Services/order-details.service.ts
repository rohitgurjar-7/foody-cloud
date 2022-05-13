import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { foodModel } from '../pages/menu/food';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  foodmodel?:foodModel;
  foodData:any;
  constructor(private http:HttpClient) { }


  getfood(data: any) {
    return this.http.get<any>('http://localhost:3000/gets', data)
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // foodDetails = [
    // {
    //   id:1,
    //   foodName:"Paneer Grilled Sandwich",
    //   foodDetails:"Pan-fried masala paneer.",
    //   foodPrice:200,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    // },
    // {
    //   id:2,
    //   foodName:"Veggie Supreme",
    //   foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
    //   foodPrice:369,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    // },
    // {
    //   id:3,
    //   foodName:"Paneer Burger",
    //   foodDetails:"panner",
    //   foodPrice:149,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    // },
    // {
    //   id:4,
    //   foodName:"Veg Masala Roll In Naan",
    //   foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
    //   foodPrice:140,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    // },
    // {
    //   id:5,
    //   foodName:"Indulgence Brownie",
    //   foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    //   foodPrice:105,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    // },
    // {
    //   id:6,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:219,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:7,
    //   foodName:"F",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:50,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:8,
    //   foodName:"H",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:80,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:9,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:100,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:7,
    //   foodName:"F",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:50,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:8,
    //   foodName:"H",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:80,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:9,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:100,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:7,
    //   foodName:"F",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:50,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:8,
    //   foodName:"H",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:80,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:9,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:100,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:7,
    //   foodName:"F",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:50,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:8,
    //   foodName:"H",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:80,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:9,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:100,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:7,
    //   foodName:"F",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:50,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:8,
    //   foodName:"H",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:80,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // },
    // {
    //   id:9,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:100,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // }
  // ]
}
