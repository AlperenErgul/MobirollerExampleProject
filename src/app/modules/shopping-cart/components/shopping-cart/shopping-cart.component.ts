import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../../../core/interfaces/product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnChanges {


  @Input() addProduct: Product | undefined;

  @Output() totalPriceProducts = new EventEmitter<number>();

  products: Product[] = [];

  totalPrice:number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.products = [];
  }

  async ngOnChanges(changes: SimpleChanges) {

    for (let i = 0; i < this.products.length; i++) {
      // @ts-ignore
      if (this.products[i].id == this.addProduct.id) {
        return await this.addNumber(i);
      }
    }

    // @ts-ignore
    this.addProduct.piece = 1


    // @ts-ignore
    this.products.push(this.addProduct);

    await this.getTotalPrice();

  }

  async deleteProduct(index: number) {
    this.products.splice(index, 1);
    await this.getTotalPrice();
  }

  async subtractNumber(index: number) {
    if (this.products[index].piece == 1) {
      return await this.deleteProduct(index);
    }
    this.products[index].piece -= 1;
    await this.getTotalPrice();
  }

  async addNumber(index: number) {
    this.products[index].piece += 1;
    await this.getTotalPrice();
  }

  async getTotalPrice(){
    this.totalPrice = 0;
    for (let a = 0 ; a<this.products.length ; a++){
       this.totalPrice +=  this.products[a].price * this.products[a].piece;
    }
    this.totalPriceProducts.emit(this.totalPrice);
  }

}
