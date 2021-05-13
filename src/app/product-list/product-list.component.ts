import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    products: Product[];

  constructor(private productService: ProductService) { }

// interval: any;

    ngOnDestroy() {}
//   ngOnDestroy() {
//           this.subscription.unsubscribe();
//           clearInterval(this.interval);
//       }

  ngOnInit() {
//   this.productService.getAllProducts().subscribe(data => {
//   this.products = data;
//   });
//   this.refreshData();
//         this.interval = setInterval(() => {
//             this.refreshData();
//         }, 5000);
  this.getProducts();
}

public getProducts() : void {
 this.productService.getAllProducts().subscribe(
    (response: Product[]) => {
      this.products = response;
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
      );
  }
}

