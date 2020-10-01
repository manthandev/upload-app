import React from "react";
import { Route, Switch } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm"
import Upload from "./Upload"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <RegistrationForm />
      </Route>
      <Route path="/login">
         <LoginForm />
        </Route>
        <Route path="/upload">
         <Upload />
        </Route>
    </Switch>
  );
}