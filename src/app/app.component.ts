import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mok-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  template: ` <h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit{
  pokemonList = POKEMONS;

  constructor(){

  }

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
