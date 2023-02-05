import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];
  productsSubscription: Subscription;

  constructor(private ProductService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscription = this.ProductService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
