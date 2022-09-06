import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class PeliculasServices{
    apikey = "e85d4acaaf0509619d24a93d6b380cfa"
    

    private API = "https://api.themoviedb.org/3/movie/now_playing?api_key="+this.apikey+"&language=en-US&";
    private APIFilter = "https://api.themoviedb.org/3/search/movie?api_key="+this.apikey+"&language=en-US&page=1&include_adult=false";

    constructor(public http:HttpClient) {}

    public getPeliculas():Observable<any> { //CONSUMIR API PELICULAS
        return this.http.get(this.API);
    } 

    public getFilterPeliculas(filtro:string):Observable<any> {  //CONSUMI API FILTRO
        if (filtro==""){
            return this.http.get(this.API);
        }else{
            return this.http.get(this.APIFilter+"&query="+filtro);
        }
            
    } 
}