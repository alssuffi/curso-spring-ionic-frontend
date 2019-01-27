import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private router: Router, private navCrtl :  NavController, public menu: MenuController) { 
  } 
  login(){
    this.router.navigateByUrl('categorias')
  }
  

  
}
