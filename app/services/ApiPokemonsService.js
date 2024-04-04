import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";

// @ts-ignore
export const pokeApi = new axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})

class ApiPokemonsService {
  async getPokemons() {
    let response = await pokeApi.get('pokemon?limit=20')
    console.log('service response', response.data);
    AppState.apiPokemons = response.data.results
  }


  async getPokemonsByName(pokemonName) {
    console.log(pokemonName);
    const response = await pokeApi.get(`pokemon/${pokemonName}`)
    console.log(response.data);
    const pokemon = new Pokemon(response.data)
    AppState.activePokemon = pokemon
    console.log('service got active by name ', AppState.activePokemon);
  }





}


export const apiPokemonsService = new ApiPokemonsService()