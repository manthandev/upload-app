import React from "react";
import { Route, Switch } from "react-router-dom"
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import Upload from "./Upload"
import PrivateRoute from "./PrivateRoutes"
import Header from "./Header"
import Home from "./Home"

 
export default function Routes() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/signup" >
        <RegistrationForm/>
      </Route>
      <Route exact path="/login">
        <LoginForm/>
      </Route>
      <PrivateRoute exact path="/upload" component={Upload}/>
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
    </div>
 
  );
}