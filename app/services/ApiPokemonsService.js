


// @ts-ignore
export const pokeApi = new axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 4000
})

class ApiPokemonsService {
  async getPokemons() {
    let results = await pokeApi.get('pokemon?limit=20')
    console.log(results.data);
  }










}


export const apiPokemonsService = new ApiPokemonsService()