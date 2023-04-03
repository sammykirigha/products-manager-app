import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProducts[] = [];
  products: IProducts[] = [
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
  ];

  toggleShowImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = 'Cart';
    console.log('In OnInit');
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProducts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProducts) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
}
