import { Injectable } from '@angular/core';
import { IProducts } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProducts[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 13, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 23.99,
        starRating: 1.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 4,
        productName: 'Hammer',
        productCode: 'TBX-0098',
        releaseDate: 'March 19, 2021',
        description: 'Curved claw steel hammer',
        price: 10.99,
        starRating: 5,
        imageUrl: 'assets/images/hammer.png',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 13, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 23.99,
        starRating: 2.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 4,
        productName: 'Hammer',
        productCode: 'TBX-0098',
        releaseDate: 'March 19, 2021',
        description: 'Curved claw steel hammer',
        price: 10.99,
        starRating: 3,
        imageUrl: 'assets/images/hammer.png',
      },
    ];
  }
}
