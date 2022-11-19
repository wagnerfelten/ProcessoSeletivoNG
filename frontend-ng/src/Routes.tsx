import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/Registration";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/Registration">
        <Registration />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
