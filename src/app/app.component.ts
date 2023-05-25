import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mok-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  // selector nom du composant
  selector: 'app-root',

  // template = la vue
  templateUrl: 'app.component.html'
})

// export pour import dans app.module
// implements OnInit pour méthode ngOnInit = au lancement de l'appli
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  // Méthode qui se lance a l'ouverture de l'appli
  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
     const pokemon:Pokemon|undefined = this.pokemonList.find(pokemon =>pokemon.id == +pokemonId);

     if(pokemon){
       console.log(`vous avez demandé le pokémon ${pokemon.name}`);
       this.pokemonSelected = pokemon;
     }else{
      console.log(`vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
     }
  }
}
