import { Injectable } from "@angular/core";
import { CredenciaisDTO } from '../models/credenciais.dto'
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService{

    constructor(public http : HttpClient){

    }
    authenticate(creds : CredenciaisDTO){
        return this.http.post(`http://localhost:8082/login`, creds,
        {
            observe : 'response',
            responseType : 'text'
        })
        ;
    }
}