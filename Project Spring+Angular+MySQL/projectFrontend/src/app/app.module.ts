import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriaComponent } from './Categoria/list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './Categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './Categoria/edit-categoria/edit-categoria.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { ListProductoComponent } from './Producto/list-producto/list-producto.component';
import { FormsModule } from '@angular/forms';
import { ServiceCategoriaService } from './Service/service-categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProductoService } from './Service/service-producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriaComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    EditProductoComponent,
    AddProductoComponent,
    ListProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceCategoriaService, ServiceProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
