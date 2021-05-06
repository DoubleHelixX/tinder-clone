import React from "react";

import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import tinderImg from "../images/tinder-logo.svg";

const S = {};

S.NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;
`;
S.TinderLogo = styled.img`
  content: url(${tinderImg});
  /* background-size: cover; */
  height: 40px;
  object-fit: contain;
`;

const Header = () => {
  return (
    <S.NavContainer>
      <PersonIcon />
      <S.TinderLogo />
      <ForumIcon />
    </S.NavContainer>
  );
};

export default Header;
