import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id!: number; 
  product!: ProductI;
  productForm!: FormGroup;
  submited: boolean = false;
  

  constructor( private productApi: ProductService, private form: FormBuilder, private router: Router){
    this.product = {...this.productApi.getProduct()}
    this.id = this.productApi.getId()
  }
  
  ngOnInit(): void {
    this.productForm = this.form.group({
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      description: [this.product.description],
      stars: [this.product.stars],
      image: [this.product.image, Validators.required]
    })
    this.productForm.valueChanges.subscribe((data)=> {
      this.product = {...data}
    })
  }
  editProduct (){
    this.submited = true;
    if(this.productForm.valid){
      this.productApi.putProduct(this.product, this.id).subscribe((data)=> {
        console.log(data);
      this.productForm.reset();
      this.submited=false;
      this.router.navigate(["/products"])
      })
    }
  }
}