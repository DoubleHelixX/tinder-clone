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
import "../index.css";

export const Account = () => {
  const tipArry = [
    "Don't forget to keep your photos fresh",
    "Not everyone appreciates only gym photos",
    "Some people want to see you smile",
    "You have 9 shots at a first impression",
    "Try to keep your tongue in your mouth",
    "Keep the kids out of frame",
    "Get off your motocycle",
  ];
  const randomNumber = Math.floor(Math.random() * tipArry.length);
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
  S.UserDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  S.VerifiedIcon = styled.svg`
    margin-left: 5px;
    width: 24px;
    height: 24px;
  `;

  S.UserDetails = styled.h2``;
  S.Occupation = styled.p`
    /* border: solid red 2px; */
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #2c2c2c;
  `;
  S.School = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #2c2c2c;
  `;
  S.ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 98%;
    height: 240px;
    margin-bottom: 0;
    padding-bottom: 0;
    /* border: solid red 2px; */
  `;
  S.ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* flex: 1; */

    padding: 0px;
    width: auto;
    margin: ${(props) => (props.margin ? props.margin : "auto")};
    /* border: solid blue 2px; */
  `;
  S.PhotoCameraIconContainer = styled.div`
    display: inline-flex;
    position: relative;
    background-color: transparent;
    border-radius: 30px;
    width: auto;
    height: auto;
    align-items: center;
    /* margin-top: 40px; */
    /* border: solid red 2px; */
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
    padding: 10px 10px;
    box-shadow: 0px 2px 33px 0px rgba(0, 0, 0, 0.12);
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

    /* border: 2px red solid !important; */
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
    justify-content: center;
    background: rgb(255, 117, 86);
    background: linear-gradient(87deg, #fd8f76 5%, #fb8297 49%, #fd669f 100%);
    border-radius: 10px;
    padding: 4px 8px;
    margin: 15px;
    width: 94.783vw;
    margin-top: 2vh;
    @media (max-height: 786px) {
      display: none;
    }
  `;
  S.Tip = styled.p`
    color: white;
    flex: 1;
    margin-left: 10px;
    font-family: Arial, sans-serif;
    font-weight: 600;
    /* border: 2px red solid; */
  `;
  S.Plus = styled(AddCircleRoundedIcon)`
    background-color: transparent;
    color: white;
    padding: 0;
    /* margin: 2px 0 0 15px; */
    cursor: pointer;
    border-radius: 30px;
    stroke: rgba(254, 46, 121, 0.2);

    /* border: 2px red solid; */

    &:active {
      fill: white;
      stroke: #fd6b9e;
    }
    &:hover {
      animation-name: ${shakeY};
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
    }
  `;
  S.PlusMedia = styled.div`
    background-color: white;

    font-size: 18px;
    color: rgba(254, 46, 121, 1);
    border-radius: 30px;
    position: absolute;
    padding: 0px 4.5px;
    right: -5px;
    bottom: 0px;
    box-shadow: 0px 4px 10px -4px hsl(0deg 0% 23% / 32%);
    border: 2px solid #aa1e51;
  `;

  return (
    <S.AccountContainer>
      <S.ContentBody>
        <S.AvatarContainer>
          <S.Avatar alt={nel} src={nel}></S.Avatar>
          <Link to="/account/edit">
            <S.ButtonBorder top="12px" right="15px" padding="15px" />
            <S.PencilIcon
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="-5 -5 34 34"
            >
              <path d="M17.079 2c-.41 0-.81.158-1.125.463l-2.23 2.229 5.574 5.583 2.229-2.208c.63-.641.63-1.64 0-2.25l-3.334-3.354A1.605 1.605 0 0 0 17.08 2m-4.101 3.438L4.46 13.966l2.691.295.19 2.408 2.397.179.305 2.691 8.518-8.527M3.84 14.944L2 21.98l7.045-1.882-.252-2.272-2.43-.178-.188-2.44"></path>
            </S.PencilIcon>
          </Link>
        </S.AvatarContainer>
        <S.UserDetailsContainer>
          <S.UserDetails>Nel, 102 </S.UserDetails>

          <S.VerifiedIcon
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <g>
              <path
                d="M3.206 8.732l-.562.308a1.24 1.24 0 00-.615.814c-.077.345 0 .705.211.991l.382.507a1.204 1.204 0 010 1.431l-.382.528c-.427.595-.224 1.453.427 1.783l.562.309c.471.242.741.77.651 1.276l-.112.617c-.063.35.032.708.26.983.23.274.568.438.93.448l.65.022c.54.022 1.012.375 1.146.881l.18.617c.203.703 1.012 1.078 1.707.792l.607-.242a1.296 1.296 0 011.438.308l.426.485c.241.265.587.414.949.41.361-.004.703-.162.938-.432l.427-.485a1.27 1.27 0 011.414-.33l.607.242c.332.138.709.127 1.032-.03.323-.156.561-.442.652-.785l.179-.616a1.243 1.243 0 011.146-.903l.652-.044c.358-.024.69-.195.912-.472.223-.277.315-.634.254-.98l-.11-.617a1.233 1.233 0 01.628-1.299l.561-.308a1.24 1.24 0 00.616-.814c.077-.345 0-.706-.211-.992l-.382-.507a1.204 1.204 0 010-1.43l.382-.528c.426-.595.224-1.453-.427-1.785l-.562-.308a1.22 1.22 0 01-.651-1.276l.112-.617a1.203 1.203 0 00-.26-.983 1.254 1.254 0 00-.93-.448l-.651-.022a1.222 1.222 0 01-1.146-.88l-.18-.617c-.202-.705-1.01-1.078-1.706-.793l-.674.243a1.296 1.296 0 01-1.437-.308l-.427-.485a1.255 1.255 0 00-.942-.39 1.253 1.253 0 00-.923.434l-.426.484a1.27 1.27 0 01-1.415.33l-.606-.241a1.264 1.264 0 00-1.033.03 1.222 1.222 0 00-.652.784l-.18.617a1.243 1.243 0 01-1.144.902l-.652.043c-.36.024-.692.196-.914.473a1.228 1.228 0 00-.254.982l.112.616c.134.484-.112 1.013-.584 1.277z"
                fill="#2180e8"
              ></path>
              <path
                stroke="#2180e8"
                d="M16.902 8.38a1.296 1.296 0 00-.94-.38c-.34 0-.682.126-.916.38l-4.184 3.934-1.622-1.4a1.282 1.282 0 00-.917-.38c-.34 0-.682.126-.939.38-.255.252-.384.57-.384.908 0 .337.129.676.384.908l2.562 2.944c.255.252.575.379.916.379.342 0 .684-.127.918-.38l5.1-5.456c.256-.253.406-.592.406-.93 0-.336-.128-.675-.385-.908h.001z"
                fill="#fff"
              ></path>
            </g>
          </S.VerifiedIcon>
        </S.UserDetailsContainer>
        <S.Occupation>
          Full time professional sleeper at nursing home
        </S.Occupation>
        <S.School>Orkin Pigeon Academy</S.School>
        <S.ButtonsContainer>
          <S.ButtonContainer margin=" 0px auto 0px 12px ">
            <S.IconButton>
              <S.ButtonBorder />
              <S.SettingsIcon />
            </S.IconButton>
            <S.ButtonsText>SETTINGS</S.ButtonsText>
          </S.ButtonContainer>
          <S.ButtonContainer margin=" 40px auto auto auto">
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
          <S.ButtonContainer margin=" 0px 12px 0px auto">
            <S.IconButton>
              <S.ButtonBorder />
              <S.VerifiedUserOutlinedIcon />
            </S.IconButton>
            <S.ButtonsText>SAFETY</S.ButtonsText>
          </S.ButtonContainer>
        </S.ButtonsContainer>

        <S.TipContainer>
          <S.Tip>Photo Tip: {tipArry[randomNumber]}</S.Tip>
          <Link to="/account/media">
            <S.Plus fontSize="large" />
          </Link>
        </S.TipContainer>
      </S.ContentBody>
      <SlideshowAds />
    </S.AccountContainer>
  );
};
