import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setText, setHTML } from "../utils/Writer.js";


export class SandboxPokemonsController {
  constructor() {
    console.log('🎮⌛️');
  }


  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      Pop.toast("Missed!")
      console.error("Controller can't catch your pokemon.", error)
    }
  }



  async getMyPokemons() {
    try {
      await sandboxPokemonsService.getMyPokemons()
    } catch (error) {
      Pop.toast("Sorry, we couldn't get your Pokemon.")
      console.error("Controller can't get your pokemons ", error)
    }

  }







}