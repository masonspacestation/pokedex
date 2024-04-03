import { apiPokemonsService } from "../services/ApiPokemonsService.js";



export class ApiPokemonsController {
  constructor() {
    console.log('🎮');
    this.getPokemons()
  }


  async getPokemons() {
    try {
      await apiPokemonsService.getPokemons()
    } catch (error) {
      console.log('Could not get api pokemons', error);
    }
  }






}