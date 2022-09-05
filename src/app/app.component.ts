import {Component, Input} from '@angular/core';
import {Product} from "./core/interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobiroller-example-project';

  category1: string = "";

  // @ts-ignore
  product: Product = [];

  // @ts-ignore
  totalPriceProducts: number;

  async newCategory(category: any) {
    this.category1 = category;
    console.log(this.category1)
  }

  async addProduct(product: Product) {

    this.product = product;
  }

  async totalPrice(totalPrice: number) {
    console.log(totalPrice)
    this.totalPriceProducts = totalPrice;
  }
}
