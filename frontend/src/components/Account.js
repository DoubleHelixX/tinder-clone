import React from "react";
import {
  spin,
  heartBeat,
  rubberBand,
  animationFrames,
  slightRotate,
  bounce,
  jello,
} from "../shared//keyframes";
import styled from "styled-components";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import nel from "../images/nel.png";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import IconButton from "@material-ui/core/IconButton";
import "../index.css";

export const Account = () => {
  const S = {};
  S.AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  S.AvatarContainer = styled.div`
    display: block;
    position: relative;
    padding: 10px;
    /* border: red 2px solid; */
  `;
  S.Avatar = styled(Avatar)`
    object-fit: cover;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
    /* border: 2px inset #b1b1b1; */
    border: 2px outset #fdfdfd;
  `;
  S.BorderColorOutlinedIcon = styled(BorderColorOutlinedIcon)`
    color: #bebdc1;
    border-radius: 30px;
    background-color: #ffffff;
    position: absolute;
    top: 18px;
    right: 20px;
    padding: 0px;
    pointer-events: none;
  `;

  S.UserDetails = styled.h2``;
  S.Occupation = styled.p`
    /* border: solid red 2px; */
    font-family: Arial, sans-serif;
    font-size: 18px;
  `;
  S.School = styled.p`
    font-family: Arial, sans-serif;
    font-size: 18px;
    /* border: solid red 2px; */
  `;
  S.ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 100%;

    /* border: red 2px solid; */
  `;
  S.ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 52px;
    width: 100%;
    /* border: red 2px solid; */
  `;
  S.PhotoCameraIconContainer = styled.div`
    display: inline-flex;
    position: relative;
    background-color: transparent;
    /* border: 2px red solid; */
    border-radius: 30px;
    padding: 0;
    margin: 0;
    width: auto;
    height: auto;
    align-items: center;
    /* padding: 10px; */
    /* border: red 2px solid; */
  `;
  S.SettingsIcon = styled(SettingsIcon)`
    position: relative;
    color: #98969c;
    border-radius: 30px;
    background-color: white;
    pointer-events: none;
    padding: 10px;
    /* border: 2px outset #fdfdfd; */
  `;
  S.PhotoCameraIcon = styled(PhotoCameraIcon)`
    color: white;
    border-radius: 30px;
    background-color: #ff5765;
    padding: 12px;
    box-shadow: 0px 5px 53px 0px rgba(0, 0, 0, 0.3);
    border: 2px outset #fdfdfd;
    &:hover {
      border: 2px inset #fdfdfd;
    }
  `;
  S.VerifiedUserOutlinedIcon = styled(VerifiedUserOutlinedIcon)`
    position: relative;
    color: #98969c;
    border-radius: 30px;
    background-color: transparent;
    pointer-events: none;
    padding: 10px;
    /* border: 2px outset #fdfdfd;
    &:hover {
      border: 2px inset #fdfdfd;
    } */
  `;

  S.ButtonBorder = styled.span`
    position: absolute;
    top: ${(props) => (props.top ? props.top : "none")};
    right: ${(props) => (props.right ? props.right : "none")};
    color: white;
    border-radius: 30px;
    background-color: #ffffff !important;
    padding: ${(props) => (props.padding ? props.padding : "24px")};
    border: 2px outset #fdfdfd;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);

    &:hover {
      border: 2px inset #fdfdfd;
    }
    &:hover + ${S.BorderColorOutlinedIcon} {
      animation-name: ${jello};
      transform-origin: center;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
    /* pointer-events: none !important; */
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
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
    }
    &:hover .plusMedia {
      animation-name: ${bounce};
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      /* transform-origin: center bottom; */
    }
  `;
  S.ButtonsText = styled.p`
    color: #98969c;
    /* font-family: "Montserrat", sans-serif; */
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    min-width: 90px;
    width: auto;
    /* border: 2px red solid; */
  `;
  S.TipContainer = styled.div`
    display: flex;
    align-items: center;
    background: rgb(255, 117, 86);
    background: linear-gradient(
      87deg,
      #ff7556 13%,
      rgba(255, 117, 86, 1) 5%,
      rgba(255, 98, 141, 1) 69%,
      rgba(246, 77, 143, 1) 100%
    );
    border-radius: 10px;
    padding: 4px 8px;
    margin: 15px;
    width: 94.783vw;
  `;
  S.Tip = styled.p`
    color: white;
    flex: 1;
    padding-left: 10px;

    /* font-size: 12px; */
  `;
  S.Plus = styled(AddCircleRoundedIcon)`
    background-color: transparent;
    color: white;
    padding: 0 0 0 15px;

    /* border-radius: 20px; */
  `;
  S.PlusMedia = styled(AddCircleRoundedIcon)`
    background-color: rgba(246, 77, 143, 1);
    color: white;
    border-radius: 20px;
    position: absolute;
    right: -5px;
    bottom: -5px;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.1);
    border: 2px outset #fdfdfd;
  `;
  S.AdContainer = styled.div``;
  S.Ad = styled.p``;

  return (
    <S.AccountContainer>
      <S.AvatarContainer>
        <S.Avatar
          style={{ height: "130px", width: "130px" }}
          alt={nel}
          src={nel}
        ></S.Avatar>
        <S.ButtonBorder top="12px" right="15px" padding="14px" />

        <S.BorderColorOutlinedIcon style={{ height: "20px", width: "20px" }} />
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
            <S.SettingsIcon style={{ height: "25px", width: "25px" }} />
          </S.IconButton>
          <S.ButtonsText>SETTINGS</S.ButtonsText>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.IconButton>
            <S.PhotoCameraIconContainer>
              <S.PhotoCameraIcon fontSize="large" />
              <S.PlusMedia className="plusMedia" />
            </S.PhotoCameraIconContainer>
          </S.IconButton>
          <S.ButtonsText>ADD MEDIA</S.ButtonsText>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.IconButton>
            <S.ButtonBorder />
            <S.VerifiedUserOutlinedIcon
              style={{ height: "25px", width: "25px" }}
            />
          </S.IconButton>
          <S.ButtonsText>SAFETY</S.ButtonsText>
        </S.ButtonContainer>
      </S.ButtonsContainer>
      <S.TipContainer>
        <S.Tip>Photo Tip: Try to keep your tongue in your mouth</S.Tip>
        <S.Plus fontSize="large" />
      </S.TipContainer>
      <S.AdContainer>
        <S.Ad></S.Ad>
      </S.AdContainer>
    </S.AccountContainer>
  );
};
