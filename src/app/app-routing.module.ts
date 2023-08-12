import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent}, 
  {path: "add", component: AddProductComponent},
  {path: "edit", component: EditProductComponent}, 
  {path: "products/:id", component: ProductDetailComponent},
  {path: "", component: HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
