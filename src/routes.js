import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UsuarioProvider from 'common/contexts/Usuario'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login />
          </UsuarioProvider>
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;