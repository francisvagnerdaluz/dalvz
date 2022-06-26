import "./tema/OniTema/padrao";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Apresentacao from "./componentes/paginas_externas/index/Apresentacao";
import Autenticacao from "./componentes/autenticacao";
import Pagina404 from "./componentes/404/Pagina404"
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                <Apresentacao/>
              </Route>
              <Route path="/autenticacao">
                  <Autenticacao/>
              </Route>
              <Route>
                  <Pagina404/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
