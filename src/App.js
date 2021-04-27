import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import Pokemon from "./containers/Pokemon";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/pokedex/:pokemonId" component={Pokemon} />
    </Switch>
  );
}

export default App;
