import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CategogiraDTO } from "src/models/categoria.dto";
import { Observable } from "rxjs";



@Injectable()
export class categoriaService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<CategogiraDTO[]> {
        return this.http.get<CategogiraDTO[]>(`http://localhost:8082/categorias/`)
    }
}