import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductCart } from 'src/app/shopping-cart/cart';
import { CartService } from './cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productCart: ProductCart[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  this.getCart();
  }

  public getCart() : void {
   this.cartService.getCart().subscribe(
      (response: ProductCart[]) => {
        this.productCart = response;
        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        }
        );
    }

}
