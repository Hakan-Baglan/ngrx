import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bindCallback } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: ProductModel[] = [];

  constructor(private http: HttpClient) { }

  post(Product: ProductModel) {
    this.http.post(environment.apiUrl+"post", Product).subscribe();
  }

  getList() {
    this.http.get<ProductModel[]>(environment.apiUrl).subscribe(res => this.productList = res );
  }
}

