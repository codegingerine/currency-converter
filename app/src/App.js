import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Converter from "View/Converter";
// import {
//   NavStyled,
//   ListStyled,
//   ListItemStyled,
//   NavLinkStyled,
// } from "./App.styled";

import "Styles/reset.scss";
import "Styles/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <NavStyled>
          <ListStyled>
            <ListItemStyled>
              <NavLinkStyled to="/">Converter</NavLinkStyled>
            </ListItemStyled>
          </ListStyled>
        </NavStyled> */}
        <Switch>
          <Route component={Converter} exact path="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
