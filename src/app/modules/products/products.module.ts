import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ProductsComponent
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
