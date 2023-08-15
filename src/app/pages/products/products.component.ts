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
  filteredProducts!: ProductI[];

  constructor (private productApi: ProductService){}
    filtrar (filtro: any){
      this.filteredProducts = this.listado.filter((product)=>
        product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filtro)
      )
    console.log(this.filteredProducts)
    }

  ngOnInit(): void {
    this.productApi.getProducts().subscribe((data: any)=> {
      this.listado = [...data]
      this.filteredProducts= [...data]
    })
  }
}
