import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listado!: ProductI[];

  constructor (private productApi: ProductService){}

  ngOnInit(): void {
    this.productApi.getProducts().subscribe((data: any)=> {
      this.listado = [...data]
    })
  }
}
