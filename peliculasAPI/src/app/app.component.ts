import { Component, OnInit } from '@angular/core';
import { PeliculasServices } from './peliculas/peliculas.service';


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
      (res) => { this.peliculas = res.results; console.log(res) },
      (err) => { console.error(err) }
    )
  }

  onSearchPelicula( search: string ) {
    this.search = search;
    console.log(sea)
}
