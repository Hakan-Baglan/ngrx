import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { Stores } from 'src/app/state/basket/stores';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  basketCount$:number = 0;
  baskets$: BasketModel[] = []; 
  constructor(private store: Store<Stores["baskets"]>) {
    this.store.select("baskets").subscribe(res=>{
      this.basketCount$ = res.length;
      this.baskets$ = res;
    });
   }

  ngOnInit(): void {
  }

}
