import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonByTypesComponent } from './pages/pokemon-by-types/pokemon-by-types.component';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonByTypesComponent
  ],
  exports: [
    PokemonComponent,
    PokemonByTypesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
