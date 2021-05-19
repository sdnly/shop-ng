import { Product } from 'src/app/product';

export class ProductCart {

          id: number;
          qty: number;
          total: number;
          productsList?: Array<Product>;
}
