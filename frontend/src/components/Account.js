import React, { useState } from "react";
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
import SettingsIcon from "@material-ui/icons/Settings";
import nel from "../images/nel.png";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import IconButton from "@material-ui/core/IconButton";

// import EditIcon from "@material-ui/icons/Edit";
// import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
// import "../index.css";

export const Account = () => {
  const [ads, setAds] = useState([
    {
      title: "Tinder Platinum™",
      description: "Level up every action you take on Tinder",
      color: "#1f1f1f",
      path: "M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z",
    },
    {
      title: "See Who Likes You",
      description: "Match with them instantly",
      color: "#E49D30",
      path: "M2.16 7.354h6.37a5.947 5.947 0 00-.894 2.084H2.16c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.341.61-.532 1.015-.491v.01zm1.68 6.263c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.34.61-.531 1.015-.49h3.796c.077.375.186.751.35 1.106l.021.043.022.043.546.902H3.84zm2.476 4.18c-.59 0-1.069-.472-1.069-1.053 0-.582.479-1.053 1.07-1.053h3.49l1.266 2.106H6.316zm13.746-1.837l-6.36 2.89a.495.495 0 01-.611-.183l-3.971-6.5a4.132 4.132 0 01-.185-3.02C9.556 7.183 11.127 6 12.949 6c.404 0 .818.064 1.233.183 1.222.365 1.745.999 2.476 2.299a5.271 5.271 0 012.346-.73c.327 0 .665.064 1.047.171 2.29.677 3.382 2.901 2.618 5.297a4.287 4.287 0 01-1.909 2.396l-.153.086-.152.075-.393.183z",
    },

    {
      title: "Like Profiles Around the World",
      description: "Passport™ To Any Location",
      color: "1E4AAC",
      path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
    },
    {
      title: "Control Your Profile",
      description: "Limit what others see about you",
      color: "#FF7B2F",
      path: "M20.4 12.182a3.809 3.809 0 1 1-7.613 0 3.809 3.809 0 1 1 7.617 0",
    },
    {
      title: "Unlimited Rewinds",
      description: "Go back and try again!",
      color: "#FFB103",
      path: "M12.119 4.599V3.307c0-1.216-.76-1.672-1.824-.988l-.608.304L6.04 5.13l-.456.304c-1.064.76-1.064 1.748 0 2.28l.38.38c.987.76 2.66 1.824 3.647 2.432l.532.304c.912.76 1.748.228 1.748-.912V8.246a5.125 5.125 0 0 1 5.167 5.167c0 2.888-2.28 5.092-5.167 5.092-3.04 0-5.32-2.28-5.32-5.168 0-.912-.76-1.671-1.747-1.671-1.064 0-1.824.76-1.824 1.671C3 18.125 6.951 22 11.815 22c4.787 0 8.738-3.8 8.738-8.663.076-4.711-3.875-8.51-8.662-8.51l.228-.228z",
    },
    {
      title: "Unlimited Likes",
      description: "Send as many Likes as you want.",
      color: "#0DE194",
      path: "M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09",
    },
  ]);
  const S = {};
  S.AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f7fa;
    overflow: hidden;
  `;
  S.ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0 4px 10px -4px hsl(0deg 0% 53% / 28%);
    border-bottom-left-radius: 50% 60px;
    border-bottom-right-radius: 50% 60px;
    background-color: white;
    padding-bottom: 82px;
    margin-bottom: 5px;
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
    margin-top: 90px;
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
    border: 2px inset rgba(254, 46, 121, 1);
  `;
  S.AdContainer = styled.div`
    background-color: #f5f7fa;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 200px;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    align-items: center;
    width: 90%;
    flex-direction: center;
    border: 2px red solid;
    font-weight: 500;
  `;
  S.AdTitleContents = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
  `;
  S.AdLogo = styled.svg`
    height: 24px;
    width: 24px;
    object-fit: contain;

    & > path {
      fill: url("#gradient");
      fill-rule: "nonzero";
    }
  `;

  S.AdTitle = styled.h3`
    font-family: Arial, sans-serif;
    color: #1f1f1f;
  `;
  S.AdDescription = styled.p`
    color: #1f1f1f;
  `;

  S.Slideshow = styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: 450px;
    border: 2px blue solid;
  `;
  S.SlideshowSlider = styled.div`
    white-space: nowrap;
    transition: ease 1000ms;
    border: 2px green solid;
  `;
  S.Slide = styled.div`
    display: inline-block;

    height: 400px;
    width: 100%;
    border-radius: 40px;
    border: 2px yellow solid;
  `;
  S.SlideshowDots = styled.div`
    text-align: center;
    border: 2px black solid;
  `;
  S.SlideshowDot = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
  `;

  S.SlideshowDotActive = styled.div`
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#000000"};
  `;

  const delay = 2700;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === ads.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

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
            <S.IconButton>
              <S.PhotoCameraIconContainer>
                <S.PhotoCameraIcon fontSize="large" />
                <S.PlusMedia className="plusMedia">+</S.PlusMedia>
              </S.PhotoCameraIconContainer>
            </S.IconButton>
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

      <S.AdContainer>
        <S.Slideshow>
          <S.SlideshowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {ads.map((ad, index) => (
              <S.Slide key={index}>
                <S.AdTitleContents>
                  <S.AdLogo
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    role="presentation"
                  >
                    {/* <defs>
                      <linearGradient
                        id="gradient"
                        x1="10%"
                        y1="90%"
                        x2="60%"
                        y2="40%"
                      >
                        <stop offset="15%" stop-color="#616161" />
                        <stop offset="95%" stop-color={ad.color} />
                      </linearGradient>
                    </defs> */}
                    <path fill={ad.color} d={ad.path}></path>
                  </S.AdLogo>
                  <S.AdTitle>{ad.title}</S.AdTitle>
                </S.AdTitleContents>
                <S.AdDescription>{ad.description}</S.AdDescription>
              </S.Slide>
            ))}
          </S.SlideshowSlider>

          <S.SlideshowDots>
            {ads.map((ad, idx) =>
              index === idx ? (
                <S.SlideshowDotActive
                  key={idx}
                  backgroundColor={ad.color}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></S.SlideshowDotActive>
              ) : (
                <S.SlideshowDot
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></S.SlideshowDot>
              )
            )}
          </S.SlideshowDots>
        </S.Slideshow>
      </S.AdContainer>
    </S.AccountContainer>
  );
};
