import React from "react";
import styled from "styled-components/macro";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

const S = {};
S.SwipeButtonsContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  /* .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
  } */
`;
S.SwipeIconButton = styled(IconButton)`
  background-color: white;
  box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
`;
S.SwipeButtonsRepeat = styled(ReplayIcon)`
  padding: 0vw !important;
  color: #f5b748 !important;
`;
S.SwipeButtonsLeft = styled(CloseIcon)`
  padding: 0vw !important;
  color: #ec5e6f !important;
`;
S.SwipeButtonsStar = styled(StarRateIcon)`
  padding: 0vw !important;
  color: #62b4f9 !important;
`;
S.SwipeButtonsRight = styled(FavoriteIcon)`
  padding: 0vw !important;
  color: #76e2b3 !important;
`;
S.SwipeButtonsLightning = styled(FlashOnIcon)`
  padding: 0vw !important;
  color: #915dd1 !important;
`;

export const SwipeButtons = () => {
  return (
    <S.SwipeButtonsContainer>
      <S.SwipeIconButton>
        <S.SwipeButtonsRepeat fontSize="large" />
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.SwipeButtonsLeft fontSize="large" />
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.SwipeButtonsStar fontSize="large" />
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.SwipeButtonsRight fontSize="large" />
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.SwipeButtonsLightning fontSize="large" />
      </S.SwipeIconButton>
    </S.SwipeButtonsContainer>
  );
};
