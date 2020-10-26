import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import HangPage from "./Hang";
import HomePage from "./Home";
import JokenpoPage from "./Jokenpo";
import LoginPage from "./Login";
import ProfilePage from "./Profile";
import SignupPage from "./SignUp";
import TicTacToePage from "./TicTacToe";

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jokenpo" component={JokenpoPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
        <Route exact path="/hang" component={HangPage} />
        <Route exact path="/tictactoe" component={TicTacToePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Pages;