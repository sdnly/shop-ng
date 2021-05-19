import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './shopping-cart/cart.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router'



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, CartService,
              {provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
