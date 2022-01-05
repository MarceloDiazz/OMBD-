import { React } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router"
import Navbar from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/movies">
          <Grid />
        </Route>
        <Route path="/movies/:id">
          <SingleProduct />
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
