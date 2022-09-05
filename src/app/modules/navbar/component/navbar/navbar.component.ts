import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductsComponent} from "../../../products/components/products/products.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() category = new EventEmitter<string>();

  constructor(private ProductComponent: ProductsComponent) { }

  ngOnInit(): void {
  }

  async selectCategory(category:string) {
    this.category.emit(category);

  }

}
