import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private productsUrl = 'http://localhost:8080/products'

  constructor(private http: HttpClient) {
  this.productsUrl = 'http://localhost:8080/products'
  }

  public findAll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl)
  }

  public save(product: Product) {
  return this.http.post<Product>(this.productsUrl, product)
  }
}
