import { Injectable } from "@angular/core";
import { CredenciaisDTO } from '../models/credenciais.dto'
import { HttpClient } from "@angular/common/http";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService{

    constructor(public http : HttpClient, public storage : StorageService){

    }
    authenticate(creds : CredenciaisDTO){
        return this.http.post(`http://localhost:8082/login`, creds,
        {
            observe : 'response',
            responseType : 'text'
        })
        ;
    }

    successfullLogin(authorizationValue : string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}