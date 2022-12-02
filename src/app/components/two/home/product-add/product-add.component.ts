import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/components/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  @ViewChild('addForm') addForm!: NgForm;
  constructor(private productServ: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.addForm.valid) {
      this.productServ.post(this.addForm.value);
      this.addForm.reset();
      console.log('add Form', this.addForm.value);
    }
  }

}
