import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceCategoriaService } from 'src/app/Service/service-categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria:Categoria = new Categoria();
  constructor(private service:ServiceCategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = Number(localStorage.getItem("id"));
    this.service.getCategoriaId(id).subscribe(data =>{
      this.categoria = data;
    })
  }

  Actualizar(){
    this.service.updateCategoria(this.categoria).subscribe(data=>{
      alert("Se actualizó la Categoría!!!");
      this.router.navigate(["list-categoria"]);
    })
  }

  Cancelar(){
    this.router.navigate(["list-categoria"]);
  }

}
