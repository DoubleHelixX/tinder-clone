import React from "react";

import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

import tinderImg from "../images/tinder-logo.svg";

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
  /* background-size: cover; */
  height: 50px;
  object-fit: contain;
`;

const Header = () => {
  return (
    <S.NavContainer>
      <S.NavIcon>
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      </S.NavIcon>
      {/* <IconButton> */}
      <S.TinderLogo />
      {/* </IconButton> */}
      <S.NavIcon>
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </S.NavIcon>
    </S.NavContainer>
  );
};

export default Header;
