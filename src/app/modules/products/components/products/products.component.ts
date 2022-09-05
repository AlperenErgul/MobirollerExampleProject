import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../../../core/interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  @Input() category: string | undefined;

  @Output() shopProduct:EventEmitter<Product> = new EventEmitter<Product>();

  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
  ) {
  }

  async ngOnChanges(changes: SimpleChanges) {
    // @ts-ignore

    this.products = await this.productsService.getCategoryProducts(this.category);
  }

  async ngOnInit() {
    setTimeout(async ()=>{
      // @ts-ignore
      this.products = await this.productsService.getAllProducts();
    },5)
  }


  async addProduct(id: number) {
    for (let i = 0 ; i<this.products.length; i++){
      if (this.products[i].id == id){
        await this.shopProduct.emit(this.products[i]);
      }
    }
  }
}
