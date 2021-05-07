import React from "react";
import {
  BrowserRouter as Router,
  HashRouter as HRouter,
  Switch,
  Route,
} from "react-router-dom";

import styled from "styled-components/macro";

import Header from "./Header";
import { SwipeButtons } from "./SwipeButtons";
import { TinderCards } from "./TinderCards";
import { Chats } from "./Chats";
import { Chatscreen } from "./ChatScreen";

import { contextTheme } from "../shared/_Constants";

const App = () => {
  const S = {};
  S.AppContainer = styled.div``;
  return (
    <S.AppContainer>
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <contextTheme.Provider value="chats">
              <Header />
            </contextTheme.Provider>
            <Chatscreen />
          </Route>
          <Route path="/chats">
            <contextTheme.Provider value="home">
              <Header />
            </contextTheme.Provider>
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </S.AppContainer>
  );
};

export default App;
