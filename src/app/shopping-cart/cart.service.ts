import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductCart } from './cart';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

      private shoppingCartUrl = 'http://localhost:8080/cart'

  constructor(private http: HttpClient) {
   this.shoppingCartUrl = 'http://localhost:8080/cart'}

   public getCart(): Observable<ProductCart[]> {
   return this.http.get<ProductCart[]>(this.shoppingCartUrl)
   }

//    public addToCart(product: Product): Observable<ProductCart> {
//    return this.http.post<ProductCart>(this.shoppingCartUrl, product)
//    }
}
