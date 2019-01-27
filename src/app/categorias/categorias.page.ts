import { Component, OnInit } from '@angular/core';
import { categoriaService } from 'src/services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public categoriaService : categoriaService) { 

  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response => {
      console.log(response)
    },
    error => {
      console.log(error)
    });
  }


}
