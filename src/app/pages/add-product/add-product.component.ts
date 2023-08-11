import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
productForm!: FormGroup;
submited: boolean = false;
product!: ProductI;

constructor(private form: FormBuilder, private productApi: ProductService, private router: Router){}
ngOnInit(): void {
  this.productForm = this.form.group({
    name: ["", Validators.required],
    price: ["", Validators.required],
    description: [""],
    stars: [""],
    image: ["", Validators.required]
  })

  this.productForm.valueChanges.subscribe((data)=> {
    this.product = {...data}
  })
}
addProduct (){
  this.submited = true;
  if(this.productForm.valid){
    this.productApi.postProduct(this.product).subscribe((data)=> {
      console.log(data);
    this.productForm.reset();
    this.submited=false;
    this.router.navigate(["/products"])
    })
    
  }
  
}
}
