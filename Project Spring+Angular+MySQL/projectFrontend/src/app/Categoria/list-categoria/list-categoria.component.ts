import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceCategoriaService } from 'src/app/Service/service-categoria.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  constructor(private service:ServiceCategoriaService, private router:Router) { }

  
  ngOnInit(): void {
    this.service.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
  }

  Editar(categoria:Categoria){
    localStorage.setItem("id", categoria.id.toString());
    this.router.navigate(["edit-categoria"]);
  }

  Eliminar(categoria:Categoria){
    this.service.deleteCategoria(categoria).subscribe(data =>{
      this.categorias = this.categorias.filter(p=>p!==categoria);
      alert("Categoría eliminada!!!");
    }, error =>{
      alert("Hay Productos que pertenecen a esta categoría.\nNo se puede eliminar la Categoría!!!")
    })
  }
}
