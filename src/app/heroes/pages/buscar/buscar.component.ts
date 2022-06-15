import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string='';
  heroes:Heroe[]=[];
  heroeSeleccionado!:Heroe | undefined;

  constructor( private heroesservice: HeroesService ) { }

  ngOnInit(): void {
  }
  buscando(){
    this.heroesservice.getSugerencias(this.termino.trim())
    .subscribe( heroes => this.heroes= heroes)
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    

    if (!event.option.value) {
      this.heroeSeleccionado= undefined;
    } else {
      const heroe:Heroe = event.option.value
      this.termino= heroe.superhero;
      this.heroesservice.getHeroePorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado= heroe)
    }
  }

}
