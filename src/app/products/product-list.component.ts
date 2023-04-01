import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
})
export class ProductComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';

  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 13, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 23.99,
      startRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 4,
      productName: 'Hammer',
      productCode: 'TBX-0098',
      releaseDate: 'March 19, 2021',
      description: 'Curved claw steel hammer',
      price: 10.99,
      startRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

  toggleShowImage(): void {
    this.showImage = !this.showImage;
  }
}
