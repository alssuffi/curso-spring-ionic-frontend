import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClienteDTO } from "src/models/cliente.dto";
import { StorageService } from "../storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }
    
    findByEmail(email : string) : Observable<ClienteDTO> {
        let token = this.storage.getLocalUser().token;
        let authoHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get<ClienteDTO>(`http://localhost:8082/clientes/email?value=${email}`,
        {'headers' : authoHeader});
    }   

    //  buscando imagem em algum diretorio web e validando
    getImageFromBucket(id : string) : Observable<any> {
        let url = `http://uol.com.br/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

}