import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { apiPokemonsService } from "../services/ApiPokemonsService.js";
import { setHTML } from "../utils/Writer.js";



export class ApiPokemonsController {
  constructor() {
    console.log('🎮');
    this.getPokemons()
    AppState.on('apiPokemons', this.drawPokemonsList)
    AppState.on('activePokemon', this.drawActivePokemon)
  }


  async getPokemons() {
    try {
      await apiPokemonsService.getPokemons()
    } catch (error) {
      console.log('Could not get api pokemons', error);
    }
  }

  drawPokemonsList() {
    const pokes = AppState.apiPokemons
    let pokeList = ''
    pokes.forEach(poke => pokeList += Pokemon.pokeListTemplate(poke.name))
    setHTML('poke-list', pokeList)
  }



  drawActivePokemon() {
    console.log('to draw active');
    const activePokemon = AppState.activePokemon
    setHTML('active-card', activePokemon.ActivePokemonCard)
    console.log('drawn active');
  }

  // this is activated by the button that brings up the active pokemon. the active pokemon needs to be set by the service before that button will work.
  async getPokemonsByName(pokemonName) {
    try {
      console.log('📃', pokemonName);
      await apiPokemonsService.getPokemonsByName(pokemonName)
    } catch (error) {
      console.log('could not get pokemons by name ', error);
    }
  }

  mapTypes() {
    const types = AppState.activePokemon.types
    let typeArr = []
    types.forEach(type => typeArr += type.name)
    console.log(typeArr);
    console.log(AppState.activePokemon);
  }


}