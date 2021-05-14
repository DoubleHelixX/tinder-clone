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
`;
S.SwipeIconButton = styled(IconButton)`
  background-color: white;
  box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
  border: solid 2px !important;
  border-color: #f0f0f1 !important;
  padding: 12px !important;
  width: auto !important;
  height: auto !important;
  &:nth-child(1) {
    width: 53px !important;
    height: 53px !important;
  }
  &:nth-child(3) {
    width: 53px !important;
    height: 53px !important;
  }
  &:nth-child(5) {
    width: 53px !important;
    height: 53px !important;
  }

  /* todo */
`;
S.SwipeButtonsRepeat = styled(ReplayIcon)`
  padding: 0vw !important;
  color: #ffb203 !important;
`;
S.SwipeButtonsLeft = styled(CloseIcon)`
  /* padding: 0vw !important; */
  color: #fe4b6b !important;
`;
S.SwipeButtonsStar = styled(StarRateIcon)`
  /* padding: 0vw !important; */
  color: #24b9ff !important;
`;
S.SwipeButtonsRight = styled(FavoriteIcon)`
  /* padding: 0vw !important; */
  color: #38e9ba !important;
`;
S.SwipeButtonsLightning = styled(FlashOnIcon)`
  /* padding: 0vw !important; */
  color: #9b4ed9 !important;
`;

export const SwipeButtons = () => {
  return (
    <S.SwipeButtonsContainer>
      <S.SwipeIconButton>
        <S.SwipeButtonsRepeat
          style={{ height: "25px", width: "25px", objectFit: "contain" }}
        />
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
