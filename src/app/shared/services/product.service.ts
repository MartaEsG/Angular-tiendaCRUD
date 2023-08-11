import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = "http://localhost:3000/productos";
  id!:number;
  product!:ProductI;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url)
  }
  getProductsById(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  postProduct (product: ProductI){
    return this.http.post(this.url, product)
  }
  putProduct(product: ProductI, id:number){
    return this.http.put(`${this.url}/${id}`, product)
  }
  deleteProduct (id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  setProduct (product: ProductI, id:number){
    this.product = {...product};
    this.id = id; 
  }
  getProduct(){
    return this.product
  }
  getId(){
    return this.id
  }
}
