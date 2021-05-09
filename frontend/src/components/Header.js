import React from "react";

import styled from "styled-components/macro";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { ReactComponent as tinderLogo } from "../images/tinder-logo.svg";

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

  S.TinderLogo = styled(tinderLogo)`
    /* content: url(${tinderLogo}); */
    height: 50px;
    width: auto;
    object-fit: contain;

    ${headerType &&
    `
        & > path {
        fill: #D3D3D3 ;
        stroke: #c0c0c0;
        }
        & > path:hover {
            fill: #FF5765;
          }
    `};
  `;

  S.PersonIcon = styled(PersonIcon)`
    color: #d3d3d3;
    &:hover {
      color: #ff5765;
    }
    ${headerType === "account" &&
    `
      color:#FF5765
      // border: 2px solid #c0c0c0;
    `};
  `;
  S.ArrowBackIosIcon = styled(ArrowBackIosIcon)`
    color: #ff5765;
  `;
  S.ForumIcon = styled(ForumIcon)`
    color: #d3d3d3;
    &:hover {
      color: #ff5765;
    }
    ${headerType === "chats" &&
    ` 
      color:#FF5765
      // border: 2px solid #c0c0c0;
    `};
  `;
  return (
    <S.NavContainer>
      <S.NavIcon>
        {headerType === null ? (
          <Link to="/account">
            <IconButton>
              <S.PersonIcon fontSize="large" />
            </IconButton>
          </Link>
        ) : (
          [
            headerType === "chatscreen" ? (
              <IconButton onClick={() => history.goBack()}>
                <S.ArrowBackIosIcon />
              </IconButton>
            ) : (
              <Link to="/account">
                <IconButton>
                  <S.PersonIcon fontSize="large" />
                </IconButton>
              </Link>
            ),
          ]
        )}
      </S.NavIcon>
      <Link to="/">
        <S.TinderLogo />
      </Link>
      <S.NavIcon>
        <Link to="/chats">
          <IconButton>
            <S.ForumIcon fontSize="large" />
          </IconButton>
        </Link>
      </S.NavIcon>
    </S.NavContainer>
  );
};

export default Header;
