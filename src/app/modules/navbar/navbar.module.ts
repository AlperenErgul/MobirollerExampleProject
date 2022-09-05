import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import {ProductsComponent} from "../products/components/products/products.component";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ],
  providers:[
    ProductsComponent
  ]
})
export class NavbarModule { }
