import { Pokemon } from "./models/Pokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null

  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {{name: String, index: string, url: String}[]} */
  apiPokemons = []
}

export const AppState = createObservableProxy(new ObservableAppState())