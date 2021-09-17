import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({

    providedIn: 'root'
    
})
    
export class PostService {

    url = 'https://fake-movie-database-api.herokuapp.com/api?s=batman';
    
    constructor(private http: HttpClient) { }

    getPosters() {

        return this.http.get(this.url).toPromise()

    }
}
