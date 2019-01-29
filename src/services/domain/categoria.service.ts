import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CategoriaDTO } from "src/models/categoria.dto";
import { Observable } from "rxjs";

@Injectable()
export class categoriaService {

    constructor(public http: HttpClient){

    }
    
    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`http://localhost:8082/categorias/`)
    }
}