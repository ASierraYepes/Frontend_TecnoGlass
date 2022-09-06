import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class PeliculasServices{
    private API = "https://www.omdbapi.com/?i=tt3896198&apikey=d441edc6";

    constructor(public http:HttpClient) {}

    public getPeliculas():Observable<any> {
        return this.http.get(this.API);
    }
}