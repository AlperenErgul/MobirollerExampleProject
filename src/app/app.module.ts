import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from "./modules/navbar/navbar.module";
import {ProductsModule} from "./modules/products/products.module";
import {ShoppingCartModule} from "./modules/shopping-cart/shopping-cart.module";
import {FooterModule} from "./modules/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ProductsModule,
    ShoppingCartModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
