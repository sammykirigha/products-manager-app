import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
})
export class ProductComponent {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 13, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 23.99,
      startRating: 4.2,
      imageUrl: '',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 13, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 23.99,
      startRating: 4.2,
      imageUrl: '',
    },
  ];
}
