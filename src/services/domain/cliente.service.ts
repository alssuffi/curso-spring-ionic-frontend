import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http/src/client";
import { Observable } from "rxjs";
import { ClienteDTO } from "src/models/cliente.dto";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient) {

    }
    
    findByEmail(email : string) : Observable<ClienteDTO> {
        //return this.http.get<ClienteDTO>(`http://localhost:8082/clientes/email?value=${email}`)
        return this.http.get<ClienteDTO>(`http://localhost:8082/clientes/email?value=${email}`)
    }   

}