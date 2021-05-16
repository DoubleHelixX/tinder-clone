import React from "react";
import {
  BrowserRouter as Router,
  HashRouter as HRouter,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import styled from "styled-components/macro";

import Header from "./Header";
import { SwipeButtons } from "./SwipeButtons";
import { TinderCards } from "./TinderCards";
import { Chats } from "./Chats";
import { Chatscreen } from "./ChatScreen";
import { Account } from "./Account";

import { contextTheme } from "../shared/_Constants";

const App = () => {
  const S = {};
  S.AppContainer = styled.div``;
  S.TinderBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  // const match = useRouteMatch();
  return (
    <S.AppContainer>
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <contextTheme.Provider value="chatscreen">
              <Header />
            </contextTheme.Provider>
            <Chatscreen />
          </Route>
          <Route path="/chats">
            <contextTheme.Provider value="chats">
              <Header />
            </contextTheme.Provider>
            <Chats />
          </Route>
          <Route exact path="/account">
            <contextTheme.Provider value="account">
              <Header />
            </contextTheme.Provider>
            <Account />
          </Route>
          <Route exact path="/gold">
            <contextTheme.Provider value="gold">
              <Header />
            </contextTheme.Provider>
          </Route>
          <Route exact path="/">
            <Header />
            <S.TinderBodyContainer>
              <TinderCards />
              <SwipeButtons />
            </S.TinderBodyContainer>
          </Route>
        </Switch>
      </Router>
    </S.AppContainer>
  );
};

export default App;
