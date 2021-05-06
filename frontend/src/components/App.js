import React from "react";
import {
  BrowserRouter as Router,
  HashRouter as HRouter,
  Switch,
  Route,
} from "react-router-dom";

import styled from "styled-components";

import Header from "./Header";

const S = {};
S.AppContainer = styled.div``;

const App = () => {
  return (
    <S.AppContainer>
      <Header />
      <Router>
        <Switch>
          <Route path="/"></Route>
          <Route path="/chat"></Route>
        </Switch>
      </Router>
    </S.AppContainer>
  );
};

export default App;
