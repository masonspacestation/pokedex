
export class Pokemon {


  constructor(results) {
    // this.id = results.id
    this.name = results.name
    this.nickName = results.nickName
    this.img = results.sprites.front_default
    this.weight = results.weight
    this.height = results.height
    this.types = results.types
    this.creatorId = results.creatorId
    // this.creator = data.creator
    // this.createdAt = data.createdAt
    // this.updatedAt = data.updatedAt

  }


  static pokeListTemplate(name) {
    return `
    <h4 class="p-3 rounded border border-bottom-2 border-secondary selectable"  onclick="app.ApiPokemonsController.getPokemonsByName('${name}')">${name}</h4>
    `
  }


  ActivePokemonCard() {
    return `
    <div class="p-3 card d-flex justify-content-center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          alt="picture of ivysaur" class="">
        <h2 class="card-title p-3 text-uppercase text-center pb-0 mb-0">ivysaur</h2>
        <hr>
        <span class="text-center">
          <p class="d-inline-block fw-bold m-auto">24</p> |
          <p class="d-inline-block fw-bold m-auto">200</p>
        </span>
        <hr>
        <h3 class="text-center">🌱 💦 🪨</h3>
      </div>
    `
  }
}



