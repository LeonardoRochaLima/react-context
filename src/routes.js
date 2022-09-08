import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UsuarioProvider from 'common/contexts/Usuario'
import { CarrinhoProvider } from 'common/contexts/Carrinho'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
            <Route path="/carrinho">
              <Carrinho />
            </Route>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;