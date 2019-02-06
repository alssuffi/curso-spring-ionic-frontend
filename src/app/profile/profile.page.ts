import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cliente: ClienteDTO;
  email: string;


  constructor(public storage: StorageService, 
              public clienteService: ClienteService, 
               private router: Router) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
        // pegar imagem amazon
        }, 
      error => {
        if(error.status == 403){
          this.router.navigateByUrl('home');
        }
      });
    }
    else {
      this.router.navigateByUrl('home');
    }

  }
    // verificando se imagem existe  em diretorio web
    getImageIfExists(any) {
      this.clienteService.getImageFromBucket(this.cliente.id)
      .subscribe(response => {
        this.cliente.imageURL = `http://uol.com.br/cp${this.cliente.id}.jpg`;
      },
      error => {});
    }

}
