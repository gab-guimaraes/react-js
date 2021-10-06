import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from "./pages/about";
import Home from "./pages/home";
import Header from "./header";
import Error from "./pages/error";

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={Error}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
