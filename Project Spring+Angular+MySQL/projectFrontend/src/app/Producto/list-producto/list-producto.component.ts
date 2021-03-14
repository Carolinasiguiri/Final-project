import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceProductoService } from 'src/app/Service/service-producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  productos: Producto[] = [];
  constructor(private service:ServiceProductoService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe(data=>{
      this.productos=data;
    })
  }

  Editar(producto:Producto){
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(["edit-producto"]);
  }

  Eliminar(producto:Producto){
    this.service.deleteProducto(producto).subscribe(data =>{
      this.productos = this.productos.filter(p=>p!==producto);
      alert("Categoría eliminada!!!");
    }, error =>{
      alert("Hay Productos que pertenecen a esta categoría.\nNo se puede eliminar la Categoría!!!")
    })
  }

}
