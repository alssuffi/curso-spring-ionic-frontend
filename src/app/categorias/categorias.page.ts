import { Component, OnInit } from '@angular/core';
import { categoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO} from 'src/models/categoria.dto';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  items: CategoriaDTO[];

  constructor(public categoriaService : categoriaService) { 
  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response => {
      this.items = response
    },
    error => {
      console.log(error)
    });
  }
}
