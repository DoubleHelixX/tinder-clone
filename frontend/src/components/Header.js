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
    box-shadow: 0px 4px 10px -4px hsl(0deg 0% 23% / 32%);
    align-items: center;
    padding-left: 54px;
    padding-right: 54px;
  `;

  S.NavIcon = styled.div`
    padding: 20px;
  `;

  S.TinderLogo = styled(tinderLogo)`
    height: 34px;
    width: auto;
    object-fit: contain;
    & > path {
      fill: #d3d3d3;
      stroke: #c0c0c0;
    }
    & > path:hover {
      fill: #ff5765;
    }

    ${headerType === "home" &&
    `
    & > path {
      fill: #ff5765;
    }
    
    `};
  `;

  S.PersonIcon = styled.svg`
    & > path {
      fill: #d3d3d3;
    }
    width: 24px;
    height: 24px;

    &:hover > path {
      fill: #ff5765;
    }
    ${headerType === "account" &&
    ` 
      & > path{
        fill: #ff5765;
      }
      `};
  `;
  S.ArrowBackIosIcon = styled(ArrowBackIosIcon)`
    color: #ff5765;
  `;

  S.ForumIcon = styled.svg`
    & > path {
      fill: #d3d3d3;
    }
    object-fit: contain;

    width: 34px;
    height: 34px;
    &:hover > path {
      fill: #ff5765;
    }
    ${headerType === "chats" &&
    ` 
      & > path {
        fill: #ff5765;
      }
      `};
  `;

  S.StarIcon = styled.svg`
    object-fit: contain;
    & > path {
      fill: #d3d3d3;
    }
    width: 30px;
    height: 30px;
    &:hover > path {
      fill: #f2cc71;
    }
    ${headerType === "gold" &&
    ` 
      & > path {
      fill: #F1C76B;
      }
      `};
  `;
  return (
    <S.NavContainer>
      {headerType === "chatscreen" && (
        <IconButton onClick={() => history.goBack()}>
          <S.ArrowBackIosIcon />
        </IconButton>
      )}
      <Link to="/">
        <S.TinderLogo />
      </Link>
      <Link to="gold">
        <S.StarIcon
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M11.999 2C11.999 7.001 17 12 22 12c-5.001 0-10 5.382-10 10 0-4.618-5.027-10-10-10 4.974 0 9.999-4.999 9.999-10z"
            fill=""
          ></path>
        </S.StarIcon>
      </Link>
      <Link to="/chats">
        <S.ForumIcon
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M11.612 16.143c0-2.821 2.627-5.213 5.97-5.213.776 0 1.552.184 2.269.43 0-4.048-4-7.36-8.836-7.36C6.06 4 2 7.434 2 11.543c0 2.637 1.672 5.09 4.18 6.317v2.76c0 .307.238.49.596.307l3.582-1.84h.896c.418 0 .836 0 1.194-.123-.597-.859-.836-1.84-.836-2.821zm5.97-3.68c-2.507 0-4.537 1.595-4.537 3.68s2.03 3.802 4.477 3.802h.299l.597.246.955.613c.299 0 .597 0 .597-.368v-1.104c1.194-.613 2.03-1.84 2.03-3.189 0-2.085-1.97-3.68-4.478-3.68h.06z"></path>
        </S.ForumIcon>
      </Link>

      <Link to="/account">
        <S.PersonIcon
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55 0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168 5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75 16.7.15.643-1.725-2.006-4.65-4.817-6.375"></path>
        </S.PersonIcon>
      </Link>
    </S.NavContainer>
  );
};

export default Header;
