import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };
  constructor( private router: Router,
     private navCrtl :  NavController,
      public menu: MenuController, 
      public auth: AuthService) { 
  } 
  //  this.router.navigateByUrl('categorias')
  login() {
    console.log(this.creds);
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      console.log(response.headers.get('Authorization'))
      this.router.navigateByUrl('categorias');
    }, error => {}
    );

  }
  

  
}
