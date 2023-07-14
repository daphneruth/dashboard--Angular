import { Component } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  description:string
   price:number;
  quantity:number;
  category:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Laptop',  description:"MacBook",price:8900, quantity: 10, category: 'Electronics'},
  {position: 2, name: 'Desktop', description:"Dell",price:8900, quantity: 15, category: 'Electronics'},
  {position: 4, name: 'Smartphone',description:"Samsung",price:8900,quantity: 20, category: 'Electronics'},
  {position: 5, name: 'Monitor', description:"Curved",price:8900, quantity: 8, category: 'Electronics'},
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: false,

})
export class ProductsComponent {
  displayedColumns: string[] = ['position', 'name', 'description', 'price', 'quantity', 'category'];

  dataSource = ELEMENT_DATA;
}
