import React from "react";
import { Route, Switch } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm"
import Upload from "./Upload"
import PrivateRoute from "./PrivateRoutes"

 
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" >
        <RegistrationForm/>
      </Route>
      <Route exact path="/login">
        <LoginForm/>
      </Route>
      <PrivateRoute exact path="/upload" component={Upload}/>
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}