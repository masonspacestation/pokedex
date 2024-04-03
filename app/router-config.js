import { AccountController } from "./controllers/AccountController.js";
import { ApiPokemonsController } from "./controllers/ApiPokemonsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ApiPokemonsController, SandboxPokemonsController],
    view: `app/views/PokemonsView.html`
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




