import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceCategoriaService } from 'src/app/Service/service-categoria.service';
import { ServiceProductoService } from 'src/app/Service/service-producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto:Producto = new Producto();
  categorias:Categoria[] = [];
  constructor(private service:ServiceProductoService, private serviceCategoria:ServiceCategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.Editar();
    this.serviceCategoria.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
    
  } 

  Editar(){
    let id = Number(localStorage.getItem("id"));
    this.service.getProductoId(id).subscribe(data =>{
      this.producto = data;
    })
  }

  Actualizar(){
    this.service.updateProducto(this.producto).subscribe(data=>{
      alert("Se actualizó el Producto!!!");
      this.router.navigate(["list-producto"]);
    })
  }

  Cancelar(){
    this.router.navigate(["list-producto"]);
  }

}
