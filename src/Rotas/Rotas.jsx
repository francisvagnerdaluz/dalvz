import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Autenticacao from "../componentes/autenticacao";
import Pagina404 from "../componentes/404/Pagina404";
import {Index} from "../componentes/paginas_externas/index/Index";

export const Rotas=()=>{
    return<>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index/>
                </Route>
                <Route path="/autenticacao">
                    <Autenticacao/>
                </Route>
                <Route>
                    <Pagina404/>
                </Route>
            </Switch>
        </Router>
    </>
}