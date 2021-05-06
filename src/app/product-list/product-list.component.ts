import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.productService.findAll().subscribe(data => {
  this.products = data;
  });
  }

}
