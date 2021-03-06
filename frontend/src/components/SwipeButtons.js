import React from "react";
import styled from "styled-components/macro";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import { rubberBand } from "../shared//keyframes";

const S = {};
S.SwipeButtonsContainer = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 40px;
  background-color: white;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
  position: fixed;
  bottom: 0vh;
`;
S.SwipeIconButton = styled(IconButton)`
  background-color: white !important;
  border: 2px solid rgba(0, 0, 0, 0.04) !important;

  box-shadow: 0px 2px 53px 0px rgba(0, 0, 0, 0.12) !important;
  /* border: solid 2px !important; */
  /* border-color: #f0f0f1 !important; */
  padding: 12px !important;
  width: auto !important;
  height: auto !important;

  &:nth-child(1) {
    width: 53px !important;
    height: 53px !important;
    &:hover {
      background-color: white;
    }
  }
  &:nth-child(2) {
    width: 63px !important;
    height: 63px !important;
    &:hover {
      background-color: white;
    }
  }
  &:nth-child(3) {
    width: 53px !important;
    height: 53px !important;
    &:hover {
      background-color: white;
    }
  }
  &:nth-child(4) {
    width: 63px !important;
    height: 63px !important;
    &:hover {
      background-color: white;
    }
  }
  &:nth-child(5) {
    width: 53px !important;
    height: 53px !important;
    &:hover {
      background-color: white;
    }
  }

  /* todo */
`;
S.Svg = styled.svg`
  /* padding: 0vw !important; */
  &:hover {
    background-color: white;
    animation-name: ${rubberBand};
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
  }
  & > path {
    fill: ${(props) => (props.fill ? props.fill : "#000000")};
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
  }
`;

export const SwipeButtons = () => {
  return (
    <S.SwipeButtonsContainer>
      <S.SwipeIconButton>
        <S.Svg
          fill="#fe4b6b"
          width="34px"
          height="34px"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"></path>
        </S.Svg>
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.Svg
          fill="#24b9ff"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"></path>
        </S.Svg>
      </S.SwipeIconButton>
      <S.SwipeIconButton>
        <S.Svg
          fill="#38e9ba"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"></path>
        </S.Svg>
      </S.SwipeIconButton>
    </S.SwipeButtonsContainer>
  );
};
