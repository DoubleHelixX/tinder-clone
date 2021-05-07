import React from "react";

import styled from "styled-components/macro";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import tinderImg from "../images/tinder-logo.svg";

import { contextTheme } from "../shared/_Constants";

import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const headerType = React.useContext(contextTheme);
  const history = useHistory();
  const S = {};

  S.NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f9f9f9;
    align-items: center;
  `;

  S.NavIcon = styled.div`
    padding: 20px;
  `;

  S.TinderLogo = styled.img`
    content: url(${tinderImg});
    height: 50px;
    object-fit: contain;
  `;

  return (
    <S.NavContainer>
      <S.NavIcon>
        {headerType === null ? (
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        ) : (
          [
            headerType === "home" ? (
              <IconButton onClick={() => history.replace("/")}>
                <ArrowBackIosIcon fontSize="large" />
              </IconButton>
            ) : (
              <IconButton onClick={() => history.replace("/chats")}>
                <ArrowBackIosIcon fontSize="large" />
              </IconButton>
            ),
          ]
        )}
      </S.NavIcon>
      <Link to="/">
        <S.TinderLogo />
      </Link>
      <S.NavIcon>
        <IconButton onClick={() => history.push("chats")}>
          <ForumIcon fontSize="large" />
        </IconButton>
      </S.NavIcon>
    </S.NavContainer>
  );
};

export default Header;
