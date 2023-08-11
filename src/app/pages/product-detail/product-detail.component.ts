import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'src/app/models/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{ 
  id!: number 
  product!: ProductI
  constructor ( private productApi:ProductService, private activateRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })

    this.productApi.getProductsById(this.id).subscribe((data:any)=> {
    this.product = {...data}
    })

  }

  editar(){
    this.productApi.setProduct(this.product, this.id)
    this.router.navigate(["/edit"])
  }

  borrar(){
    this.productApi.deleteProduct(this.id).subscribe((data)=> {
      console.log("elemento borrado", data), 
      this.router.navigate(["/products"])
    })
  }

}
