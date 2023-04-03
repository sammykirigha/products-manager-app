import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  // providers: [ProductService],
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
  products: IProducts[] = [];

  constructor(private productService: ProductService) {}

  toggleShowImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this.listFilter = 'Cart';
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
