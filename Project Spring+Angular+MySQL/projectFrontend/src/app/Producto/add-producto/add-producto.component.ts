import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceCategoriaService } from 'src/app/Service/service-categoria.service';
import { ServiceProductoService } from 'src/app/Service/service-producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto:Producto = new Producto();
  categorias:Categoria[] = [];
  constructor(private service:ServiceProductoService, private serviceCategoria:ServiceCategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.serviceCategoria.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
  }

  Guardar(){
    if(this.producto.categoria_id == undefined){
      alert("Seleccione una Categoría!!!");
    }else{
      this.service.createProducto(this.producto).subscribe(data=>{
        alert("Se agregó la Producto!!!");
        this.router.navigate(["list-producto"]);
      })
    }    
  }

  Cancelar(){
    this.router.navigate(["list-producto"]);
  }
}
