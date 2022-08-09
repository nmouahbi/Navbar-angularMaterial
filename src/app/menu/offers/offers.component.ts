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
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  products : product[] = [
    {name: 'Product 1', price: 100, description: 'This is a description', image: 'assets/image1.jpg' , altetxt: 'image1' , button: 'Buy'},
    {name: 'Product 2', price: 200, description: 'This is a description', image: 'assets/image1.jpg' , altetxt: 'image2'  , button: 'Buy'},
    {name: 'Product 3', price: 300, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image3' , button: 'Buy'},
    {name: 'Product 4', price: 400, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image4'  , button: 'Buy'},
    {name: 'Product 5', price: 500, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image5'  , button: 'Buy'},
    {name: 'Product 6', price: 600, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image6'  , button: 'Buy'},
    {name: 'Product 7', price: 700, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image7'  , button: 'Buy'},
    {name: 'Product 8', price: 800, description: 'This is a description', image: 'assets/image1.jpg'   , altetxt: 'image8'  , button: 'Buy'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
