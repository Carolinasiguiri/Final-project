import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceCategoriaService } from 'src/app/Service/service-categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria;
  constructor(private service:ServiceCategoriaService, private router:Router) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createCategoria(this.categoria).subscribe(data=>{
      alert("Se agregó la Categoría!!!");
      this.router.navigate(["list-categoria"]);
    })
  }

  Cancelar(){
    this.router.navigate(["list-categoria"]);
  }

}
