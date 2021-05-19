import React, { useState, useEffect, useRef } from "react";
import {
  spin,
  heartBeat,
  rubberBand,
  animationFrames,
  slightRotate,
  bounce,
  jello,
  shakeY,
} from "../shared//keyframes";
import styled from "styled-components";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import nel from "../images/nel.png";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import IconButton from "@material-ui/core/IconButton";
import { SlideshowAds } from "./SlideshowAds";
import { Link } from "react-router-dom";

// import EditIcon from "@material-ui/icons/Edit";
// import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
// import "../index.css";

export const Account = () => {
  const S = {};
  S.AccountContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    background: linear-gradient(
      185deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(245, 247, 250, 1) 70%
    );
    overflow: hidden;
    height: 100vh;
    /* border: 2px red solid; */
  `;
  S.ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60vh;
    box-shadow: 0 4px 10px -4px hsl(0deg 0% 53% / 28%);
    border-bottom-left-radius: 50% 60px;
    border-bottom-right-radius: 50% 60px;
    background-color: white;
    padding-bottom: 82px;
    margin-bottom: 5px;
    min-height: 400px;
    /* border: 2px red solid; */
    margin-top: 15px;
  `;
  S.AvatarContainer = styled.div`
    display: block;
    position: relative;
    padding: 10px;
    margin-top: 75px;
  `;
  S.Avatar = styled(Avatar)`
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.2);
    width: 130px !important;
    height: 130px !important;
    object-fit: cover !important;
    border: 2px solid #e0e0e0;
  `;
  S.PencilIcon = styled.svg`
    color: #bebdc1;
    border-radius: 30px;
    background-color: #ffffff;
    position: absolute;
    top: 17px;
    right: 20px;
    padding: 0px;
    pointer-events: none;
    width: 24px;
    height: 24px;
    object-fit: contain;
    /* transform: scale(0.75); */

    & > path {
      fill: #a9a9a9;
      stroke: #ffffff;
    }
  `;

  S.UserDetails = styled.h2``;
  S.Occupation = styled.p`
    /* border: solid red 2px; */
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #2c2c2c;
  `;
  S.School = styled.p`
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #2c2c2c;
  `;
  S.ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 100%;
  `;
  S.ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 52px;
    width: 100%;
  `;
  S.PhotoCameraIconContainer = styled.div`
    display: inline-flex;
    position: relative;
    background-color: transparent;
    border-radius: 30px;
    padding: 0;
    margin: 0;
    width: auto;
    height: auto;
    align-items: center;
  `;
  S.SettingsIcon = styled(SettingsIcon)`
    position: relative;
    color: #98969c;
    border-radius: 30px;
    background-color: white;
    pointer-events: none;
    padding: 10px;
    width: 25px;
    height: 25px;
  `;
  S.PhotoCameraIcon = styled(PhotoCameraIcon)`
    color: white;
    border-radius: 30px;
    background: rgb(254, 46, 121);
    background: linear-gradient(
      87deg,
      rgba(254, 46, 121, 1) 0%,
      rgba(254, 78, 104, 1) 45%,
      rgba(255, 111, 89, 1) 100%
    );
    padding: 12px;
    box-shadow: 0px 2px 33px 0px rgba(0, 0, 0, 0.12);

    border: 1px solid #e0e0e0;
    border: 2px outset rgba(254, 46, 121, 1);
  `;
  S.VerifiedUserOutlinedIcon = styled(VerifiedUserOutlinedIcon)`
    position: relative;
    color: #98969c;
    border-radius: 30px;
    background-color: transparent;
    pointer-events: none;
    padding: 10px;
  `;

  S.ButtonBorder = styled.span`
    position: absolute;
    top: ${(props) => (props.top ? props.top : "none")};
    right: ${(props) => (props.right ? props.right : "none")};
    color: white;
    border-radius: 30px;
    background-color: #ffffff;
    padding: ${(props) => (props.padding ? props.padding : "24px")};
    border: 2px outset #fdfdfd;
    box-shadow: 0px 2px 33px 0px rgba(0, 0, 0, 0.12);

    cursor: pointer;

    &:hover {
      border: 2px inset #fdfdfd;
    }
    &:hover + ${S.PencilIcon} {
      animation-name: ${jello};
      transform-origin: center;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
  `;

  S.IconButton = styled(IconButton)`
    &:hover ${S.SettingsIcon} {
      -webkit-animation-name: ${spin};
      -webkit-animation-duration: 4000ms;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      -moz-animation-name: ${spin};
      -moz-animation-duration: 4000ms;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: linear;
      -ms-animation-name: ${spin};
      -ms-animation-duration: 4000ms;
      -ms-animation-iteration-count: infinite;
      -ms-animation-timing-function: linear;

      animation-name: ${spin};
      animation-duration: 4000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    &:hover ${S.VerifiedUserOutlinedIcon} {
      background-color: none;
      animation-name: ${heartBeat};
      animation-duration: 1.3s;
      animation-timing-function: ease-in-out;
    }
    &:hover ${S.PhotoCameraIcon} {
      border: 2px inset rgba(254, 46, 121, 1);
    }
    &:hover .plusMedia {
      animation-name: ${bounce};
      animation-duration: 0.7s;
      animation-timing-function: ease-in-out;
    }
    &:hover ${S.PhotoCameraIconContainer} ${S.PlusMedia} {
      animation-name: ${bounce};
      animation-duration: 0.7s;
      animation-timing-function: ease-in-out;
    }
  `;

  S.ButtonsText = styled.p`
    color: #98969c;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    min-width: 90px;
    width: auto;
  `;
  S.TipContainer = styled.div`
    display: flex;

    align-items: center;
    background: rgb(255, 117, 86);
    background: linear-gradient(87deg, #fd8f76 5%, #fb8297 49%, #fd669f 100%);
    border-radius: 10px;
    padding: 4px 8px;
    margin: 15px;
    width: 94.783vw;
    margin-top: 10vh;
    @media (max-height: 866px) {
      display: none;
    }
  `;
  S.Tip = styled.p`
    color: white;
    flex: 1;
    padding-left: 10px;
    font-family: Arial, sans-serif;
    font-weight: 600;
  `;
  S.Plus = styled(AddCircleRoundedIcon)`
    background-color: transparent;
    color: white;
    padding: 0 0 0 15px;
    cursor: pointer;
    &:hover {
      animation-name: ${shakeY};
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
    }
  `;
  S.PlusMedia = styled.div`
    background-color: white;
    font-size: 20px;
    color: rgba(254, 46, 121, 1);
    border-radius: 25px;
    position: absolute;
    padding: 0px 6px;
    right: -5px;
    bottom: 0px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.52);
    border: 2px solid rgba(254, 46, 121, 1);
  `;

  return (
    <S.AccountContainer>
      <S.ContentBody>
        <S.AvatarContainer>
          <S.Avatar alt={nel} src={nel}></S.Avatar>
          <S.ButtonBorder top="12px" right="15px" padding="15px" />

          <S.PencilIcon
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="-5 -5 34 34"
          >
            <path d="M17.079 2c-.41 0-.81.158-1.125.463l-2.23 2.229 5.574 5.583 2.229-2.208c.63-.641.63-1.64 0-2.25l-3.334-3.354A1.605 1.605 0 0 0 17.08 2m-4.101 3.438L4.46 13.966l2.691.295.19 2.408 2.397.179.305 2.691 8.518-8.527M3.84 14.944L2 21.98l7.045-1.882-.252-2.272-2.43-.178-.188-2.44"></path>
          </S.PencilIcon>
        </S.AvatarContainer>

        <S.UserDetails>Nel, 102</S.UserDetails>
        <S.Occupation>
          Full time professional sleeper at nursing home
        </S.Occupation>
        <S.School>Orkin Pigeon Academy</S.School>
        <S.ButtonsContainer>
          <S.ButtonContainer>
            <S.IconButton>
              <S.ButtonBorder />
              <S.SettingsIcon />
            </S.IconButton>
            <S.ButtonsText>SETTINGS</S.ButtonsText>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Link to="/account/media">
              <S.IconButton>
                <S.PhotoCameraIconContainer>
                  <S.PhotoCameraIcon fontSize="large" />
                  <S.PlusMedia className="plusMedia">+</S.PlusMedia>
                </S.PhotoCameraIconContainer>
              </S.IconButton>
            </Link>
            <S.ButtonsText>ADD MEDIA</S.ButtonsText>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <S.IconButton>
              <S.ButtonBorder />
              <S.VerifiedUserOutlinedIcon />
            </S.IconButton>
            <S.ButtonsText>SAFETY</S.ButtonsText>
          </S.ButtonContainer>
        </S.ButtonsContainer>
        <S.TipContainer>
          <S.Tip>Photo Tip: Try to keep your tongue in your mouth</S.Tip>
          <S.Plus fontSize="large" />
        </S.TipContainer>
      </S.ContentBody>
      <SlideshowAds />
    </S.AccountContainer>
  );
};
