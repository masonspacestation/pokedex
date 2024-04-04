


function formatTypes(types) {
  let typesArr = []


  if (types.includes('normal')) {
    typesArr.push('📦')
  }
  if (types.includes('fighting')) {
    typesArr.push('🤺')
  }
  if (types.includes('flying')) {
    typesArr.push('🪽')
  }
  if (types.includes('poison')) {
    typesArr.push('☠️')
  }
  if (types.includes('ground')) {
    typesArr.push('🏜️')
  }
  if (types.includes('rock')) {
    typesArr.push('🪨')
  }
  if (types.includes('bug')) {
    typesArr.push('🐛')
  }
  if (types.includes('ghost')) {
    typesArr.push('👻')
  }
  if (types.includes('steel')) {
    typesArr.push('🦾')
  }
  if (types.includes('fire')) {
    typesArr.push('🔥')
  }
  if (types.includes('water')) {
    typesArr.push('💦')
  }
  if (types.includes('grass')) {
    typesArr.push('🌱')
  }
  if (types.includes('electric')) {
    typesArr.push('⚡️')
  }
  if (types.includes('psychic')) {
    typesArr.push('🔮')
  }
  if (types.includes('ice')) {
    typesArr.push('🧊')
  }
  if (types.includes('dragon')) {
    typesArr.push('🐲')
  }
  if (types.includes('dark')) {
    typesArr.push('🕋')
  }
  if (types.includes('fairy')) {
    typesArr.push('🧚')
  }
  if (types.includes('unknown')) {
    typesArr.push('🤷')
  }
  if (types.includes('shadow')) {
    typesArr.push('👤')
  }
  return typesArr
}




export class Pokemon {







  constructor(results) {
    // this.id = results.id
    this.name = results.name
    this.nickName = results.nickName
    this.img = results.sprites.front_default
    this.weight = results.weight
    this.height = results.height
    this.types = formatTypes(results.types.name)
    this.creatorId = results.creatorId
    // this.creator = data.creator
    // this.createdAt = data.createdAt
    // this.updatedAt = data.updatedAt

  }


  static pokeListTemplate(name) {
    return `
    <h4 class="p-3 rounded border border-bottom-2 border-secondary text-capitalize selectable"  onclick="app.ApiPokemonsController.getPokemonsByName('${name}')">${name}</h4>
    `
  }


  get ActivePokemonCard() {
    return `
    <div class="p-3 card rounded rounded-2 d-flex justify-content-center">
        <img src="${this.img}"
          alt="picture of ${this.name}" class="mx-5">
        <h2 class="card-title p-3 text-uppercase text-center pb-0 mb-0">${this.name}</h2>
        <hr>
        <span class="text-center">
          <p class="d-inline-block fw-bold m-auto">${this.weight}</p> |
          <p class="d-inline-block fw-bold m-auto">${this.height}</p>
        </span>
        <hr>
        <h3 class="text-center">${this.types}</h3>
      </div>
    `
  }
}



