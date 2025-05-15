import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products : any[] = [];
  constructor(private productsService : ProductService ){}
  ngOnInit():void{
    this.productsService.fetchProducts().subscribe({
      next: (response) => {
        this.products = response.products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    })
  }
}
