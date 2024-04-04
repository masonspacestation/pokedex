import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
  async catchPokemon() {
    console.log('catching', AppState.activePokemon);
    const response = await api.post('api/pokemon', AppState.activePokemon)
    const pokemon = new Pokemon(response.data)
    console.log(response.data);
    AppState.myPokemons.push(pokemon)
    console.log(AppState.myPokemons);
  }
  async getMyPokemons() {
    const response = await api.get('api/pokemon')
    console.log('🪩', response.data);
  }









}


export const sandboxPokemonsService = new SandboxPokemonsService()