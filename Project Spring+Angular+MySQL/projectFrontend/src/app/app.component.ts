import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectFrontend';

  constructor (private router:Router){

  }

  listarProductos(){
    this.router.navigate(['list-producto']);
  }
}
