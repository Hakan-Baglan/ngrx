import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountComponent } from './components/one/add-count/add-count.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CountComponent } from './components/one/count/count.component';
import { LayoutsComponent } from './components/two/layouts/layouts.component';
import { NavbarComponent } from './components/two/layouts/navbar/navbar.component';
import { HomeComponent } from './components/two/home/home.component';
import { Reducers } from './state/basket/reducers';
import { ProductAddComponent } from './components/two/home/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    AddCountComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers.baskets)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
