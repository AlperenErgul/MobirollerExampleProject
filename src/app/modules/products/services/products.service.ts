import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getAllProducts(){
   return await this.http.get('https://fakestoreapi.com/products').toPromise();
  }

  async getCategoryProducts(category:string){
    return await this.http.get('https://fakestoreapi.com/products/category/' + category).toPromise();
  }



}
