import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import * as BasketActions from 'src/app/state/basket/baskets.action';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = []

  constructor(private store: Store,
              private productServ: ProductService) {
                this.products = this.productServ.productList;
    this.setProduct();
  }

  ngOnInit(): void {
  }

  setProduct() {
    for (let i = 0; i < 100; i++) {
      let product = new ProductModel();
      product.id = i;
      product.name = `Product ${i + 1}`,
        product.unitPrice = i * 5;
      product.stock = i * 10;
      this.products.push(product);
    }
  }

  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantitiy = 1;
    this.store.dispatch(BasketActions.addBasket({basket: basketModel}))
  }

}
