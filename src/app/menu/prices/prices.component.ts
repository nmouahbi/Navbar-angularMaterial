import { Component, OnInit } from '@angular/core';


export interface product {
  name: string;
  price: number;
  description: string;
  image: string;
  altetxt: string;
  button: string;
}
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  products : product[] = [
    {name: 'Product 1', price: 100, description: 'This is a description', image: 'assets/image1.jpg' , altetxt: 'image1' , button: 'Buy'},
    {name: 'Product 2', price: 200, description: 'This is a description', image: 'assets/image1.jpg' , altetxt: 'image2'  , button: 'Buy'},
    {name: 'Product 3', price: 300, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image3' , button: 'Buy'},
    {name: 'Product 4', price: 400, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image4'  , button: 'Buy'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
