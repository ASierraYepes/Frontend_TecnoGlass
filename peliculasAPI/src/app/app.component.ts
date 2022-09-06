import { Component, OnInit } from '@angular/core';
import { PeliculasServices } from './services/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peliculas:any;
  search: string = '';

  constructor(public pelicula:PeliculasServices){}

  ngOnInit(){
    this.pelicula.getPeliculas().subscribe(
      (res) => { this.peliculas = res.results; },
      (err) => { console.error(err) }
    )
  }

  onSearchPelicula( search: string ) { //Barra de busqueda 
    this.search = search;
    // console.log(search)
    this.pelicula.getFilterPeliculas(search).subscribe(
      (res) => { this.peliculas = res.results; },
      (err) => { console.error(err) }
    ) 
  }
}
