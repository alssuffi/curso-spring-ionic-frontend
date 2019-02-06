import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from 'src/services/storage.service';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService,
                public alertController: AlertController){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try{
        console.log("Passou no interceptor TRY");
        return next.handle(req)
        }
        catch(error){
            console.log("Passou no interceptor CATCH");
            let errorObj = error;
            if(errorObj.error){
                errorObj = errorObj.error;
            }
            if(!errorObj.status) {
                errorObj = JSON.parse(errorObj)
                switch(errorObj.status){
                    case 403:
                    this.handle403();
                    this.handle401();
                    break;
                    case 401:
                    this.handle401();
                    break;
                    default:
                    this.handleDefault(errorObj);
                    break;

                }
            }
            return Observable.throw(errorObj)
        } 
        
    }
    handle403(){
        this.storage.setLocalUser(null);
    }
    
    async handle401(){
            const alert = await this.alertController.create({
              header: 'Alert',
              subHeader: 'Erro 401: falha de autenticação',
              message: 'E-mail ou Senha incorretos',
              buttons: ['OK']
            });
            await alert.present();
            this.storage.setLocalUser(null);
          }
    
    async  handleDefault(errorObj){
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Erro ' + errorObj,
            message: 'Erro generico' + errorObj,
            buttons: ['OK']
          });
          await alert.present();
          this.storage.setLocalUser(null);
    }
    
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};