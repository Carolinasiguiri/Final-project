import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './Categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './Categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './Categoria/list-categoria/list-categoria.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { ListProductoComponent } from './Producto/list-producto/list-producto.component';

const routes: Routes = [
  {path:'add-categoria', component:AddCategoriaComponent},
  {path:'edit-categoria', component:EditCategoriaComponent},
  {path:'list-categoria', component:ListCategoriaComponent},

  {path:'add-producto', component:AddProductoComponent},
  {path:'edit-producto', component:EditProductoComponent},
  {path:'list-producto', component:ListProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
