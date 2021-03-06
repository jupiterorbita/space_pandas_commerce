import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { PromotionComponent } from './home/products/promotion/promotion.component';
import { SearchComponent } from './home/products/search/search.component';
import { InventoryComponent } from './home/products/inventory/inventory.component';
import { DetailsComponent } from './home/products/details/details.component';
import { ProductsComponent } from './home/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    PromotionComponent,
    SearchComponent,
    InventoryComponent,
    DetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
