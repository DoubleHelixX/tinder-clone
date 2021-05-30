import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import styled, { css } from "styled-components/macro";
import IconButton from "@material-ui/core/IconButton";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import {
  rubberBand,
  enterUpExitRight,
  enterRightExitUp,
  exitUpEnterUp,
  fadeInUp,
  rollIn,
} from "../shared//keyframes";

import nel from "../images/nel.png";
import nel2 from "../images/nel2.jpg";
import nel3 from "../images/nel3.jpg";
import nel4 from "../images/nel4.jpg";
import nel5 from "../images/nel5.jpg";
import nel6 from "../images/nel6.jpg";
import nel7 from "../images/nel7.png";
import nel8 from "../images/nel8.jpg";
import nel9 from "../images/nel9.png";
import { useHistory } from "react-router-dom";

const S = {};

S.TinderCardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 38px);
  width: 95vw;
  min-height: calc(397.792px + 40px);
  padding: 0;
  margin-bottom: 10px;
  position: relative;
  margin: 8px auto auto auto;
  overflow: hidden;
  /* border: 2px blue solid; */
`;

S.TinderCard = styled.div`
  position: relative;
  margin: auto;
  width: auto;
  max-width: auto;
  min-width: 95vw;
  height: 85%;
  min-height: calc(397.792px + 60px);
  /* max-height: 80vh; */
  /* padding: 20px; */
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.1);
  cursor: grab;
  /* border: 2px red solid; */
`;
S.TinderCardSwipe = styled.div`
  position: absolute;
  height: 100%;
  animation: ${rollIn};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  & > div {
    height: 100%;
  }
`;
S.PhotoSwitchBtnContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 90%;
  height: 12px !important;
  margin: auto;
  margin-top: 8px;
  top: 0;
  left: 5%;
  /* border: 2px red solid; */
`;
S.PhotoSwitchBtnExtender = styled.div`
  position: relative;
  padding: 2px 2px;
  padding-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 100%;

  &:active > button {
    background-color: #ffffff;
  }

  &:focus > button {
    background-color: #ffffff;
  }
  /* border: 2px red solid; */
`;
S.PhotoSwitchBtn = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 4px;
  border: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgb(159,159,159,.2)"};
  cursor: pointer;
  &:active,
  &:focus {
    background-color: #ffffff;
  }

  /* border: 2px red solid; */
`;
S.SuperLikeHint = styled.h1`
  color: #24b9ff;
  position: sticky;
  width: 186.875px;
  margin: auto;

  top: 30%;
  /* border-top: 0px solid #24b9ff; */
  /* border-bottom: 2px groove #24b9ff; */
  /* outline: 5px groove rgba(36, 185, 255, 0.35); */
  /* outline-offset: 12px; */
  padding: 20px;
  border-radius: 40px 0px 40px 0px;
  text-align: center;
  color: #ffffff;

  -webkit-box-shadow: 0px 1px 5px 0px rgb(64, 116, 181, 0.08),
    0px 1px 5px 0px rgb(64, 116, 181, 0.08), 0px 5px 35px 5px rgba(0, 0, 0, 0);
  /* box-shadow: 0px 15px 15px 0px #4074b5, 0px -15px 35px 0px #4074b5,
    0px 5px 35px 5px rgba(0, 0, 0, 0); */
  background: transparent;
  text-shadow: 2px 2px 0 #24b9ff, 2px -2px 0 #24b9ff, -2px 2px 0 #24b9ff,
    -2px -2px 0 #24b9ff, 2px 0px 0 #24b9ff, 0px 2px 0 #24b9ff,
    -2px 0px 0 #24b9ff, 0px -2px 0 #24b9ff;
  z-index: -1;
  animation: ${fadeInUp};
  animation-duration: 12s;
  animation-timing-function: ease-in-out;
`;
S.UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 30px;
  left: 10px;
  width: 100%;
  /* height: 100%; */
  /* border: red solid 2px; */
`;
S.UserDetails = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 5px;
`;
S.UserName = styled.h1`
  color: white;
`;
S.UserAge = styled.h2`
  color: white;
  padding-left: 12px;
  font-weight: 500;
`;
S.UserPassions = styled.div`
  color: white;
`;
S.PassionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  align-items: baseline;
  width: 95%;
  height: auto;
  /* border: red solid 2px; */
`;

S.PassionContainer = styled.div`
  color: white;
  border-radius: 100px;
  border: 1px solid transparent;
  width: auto;
  height: 18px;
  margin: 8px 2px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 27%);

  background: ${(props) =>
    props.background
      ? props.background
      : "linear-gradient(90deg, #ff7854, #fd267d)"};

  width: fit-content;
  padding: 4px;
  margin-right: 8px;

  /* display: inline-block; */
`;

S.Passion = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  padding: 1px 10px;
  text-align: center;
  font-weight: bolder;
  width: auto;
  min-width: 10px;
`;
S.About = styled.p`
  color: white;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  margin-left: 5px;
  height: 100%;
  width: 93%;
  white-space: pre-wrap;
  /* padding-bottom: 100%; */
  /* border: 2px red solid; */
`;
S.ViewProfile = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  cursor: pointer;

  /* border: 1px red solid; */
`;
S.SwipeButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  bottom: 23px;
  /* border: 2px red solid; */
`;
S.SwipeIconButton = styled(IconButton)`
  border: 2px solid rgba(0, 0, 0, 0.04) !important;
  position: relative !important;

  box-shadow: 0px 2px 53px 0px rgba(0, 0, 0, 0.12) !important;
  /* border: solid 2px !important; */
  /* border-color: #f0f0f1 !important; */
  padding: 12px !important;
  width: auto !important;
  height: auto !important;
  background-color: transparent !important;
  &:hover svg {
    animation-name: ${rubberBand};
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
  }
  &:nth-child(1) {
    width: 53px !important;
    height: 53px !important;

    svg > path {
      fill: ${(props) => (props.fill ? props.fill : "#000000")};
      width: ${(props) => (props.width ? props.width : "auto")};
      height: ${(props) => (props.height ? props.height : "auto")};
    }
  }
  &:nth-child(2) {
    width: 63px !important;
    height: 63px !important;

    svg > path {
      fill: ${(props) => (props.fill ? props.fill : "#000000")};
      width: ${(props) => (props.width ? props.width : "auto")};
      height: ${(props) => (props.height ? props.height : "auto")};
    }
  }
  &:nth-child(3) {
    width: 53px !important;
    height: 53px !important;

    svg > path {
      fill: ${(props) => (props.fill ? props.fill : "#000000")};
      width: ${(props) => (props.width ? props.width : "auto")};
      height: ${(props) => (props.height ? props.height : "auto")};
    }
    p:nth-of-type(1) {
      visibility: hidden;
      position: absolute;
      z-index: -5;
      color: #24b9ff;
    }

    p:nth-of-type(2) {
      visibility: hidden;
      position: absolute;
      z-index: -5;
      color: #24b9ff;
    }
  }

  &:focus:nth-child(3):focus-visible {
    outline: 2px solid blue;
  }
  &:focus:nth-child(3) {
    svg {
      animation-name: ${exitUpEnterUp};
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      /* animation-delay: 1.2s; */
    }
    p:nth-of-type(1) {
      animation-name: ${enterUpExitRight};
      animation-duration: 1.2s;
      animation-timing-function: ease-in-out;
    }

    p:nth-of-type(2) {
      animation-name: ${enterRightExitUp};
      animation-duration: 1.2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0.9s;
    }
  }

  &:nth-child(4) {
    width: 63px !important;
    height: 63px !important;

    svg > path {
      fill: ${(props) => (props.fill ? props.fill : "#000000")};
      width: ${(props) => (props.width ? props.width : "auto")};
      height: ${(props) => (props.height ? props.height : "auto")};
    }
  }
  &:nth-child(5) {
    width: 53px !important;
    height: 53px !important;

    svg > path {
      fill: ${(props) => (props.fill ? props.fill : "#000000")};
      width: ${(props) => (props.width ? props.width : "auto")};
      height: ${(props) => (props.height ? props.height : "auto")};
    }
  }

  /* todo */
`;
S.Svg = styled.svg`
  /* padding: 0vw !important; */
  &:hover {
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

export const TinderCards = () => {
  const history = useHistory();

  const [people, setPeople] = useState([
    {
      id: 0,
      firstName: "Nel",
      lastName: "",
      message: "Hey cutie ! how is your day going? 😃",
      url: [nel, nel2, nel3, nel4, nel5, nel6, nel7, nel8, nel9],
      timestamp: "32 minutes ago",
      age: "32",
      passions: "Fishing, Bending Over, Foodie, Country Music",
      about: `I’m a princess only at night ;)`,
    },
    {
      id: 1,
      firstName: "Aiony",
      lastName: "Haust",
      message: `yeah I'm avaiable tomorrow if you want to meet 😍`,
      url: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      ],
      timestamp: "2 days ago",
      age: "26",
      passions: "biking, Yoga, Fashion",
      about: `IG: idreamofAsha 


I’m shy, private, But I’m fun. I’m educated, opinionated, but also open minded. Homebody. Not sure what I’m on here for. But I’m always open to friends. Don’t hit me up on no bullshit thx.`,
    },
    {
      id: 3,
      firstName: "Nel",
      lastName: "",
      message: "Hey cutie ! how is your day going? 😃",
      url: [nel2, nel3, nel4, nel5, nel6, nel7, nel8, nel9],
      timestamp: "32 minutes ago",
      age: "32",
      passions: "Fishing, Bending Over, Foodie, Country Music",
      about: `I’m a princess only at night ;)`,
    },
  ]);
  const authUser = {
    id: 2,
    firstName: "Robert",
    lastName: "W",
    message: `I can give you lots of moneys 😉`,
    url: [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    ],
    timestamp: "1 week ago",
    age: "46",
    passions: "gym, biking,bussiness, investing, traveling, foodie",
    about: `I’m a princess, I’m also a Scorpio   
    insta: itziardeclavijo`,
    favPower: 5,
  };
  const [lastDirection, setLastDirection] = useState();
  const [favPower, setFavPower] = useState(authUser.favPower);

  const favHintRef = React.createRef();
  const favBtnRef = React.createRef();

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    [people.length]
  );
  const alreadyRemoved = [];
  const [photoSwitchIdx, setPhotoSwitchIdx] = useState(0);
  const [removedCards, setRemovedCards] = useState([]);

  const swiped = (direction, idToDelete) => {
    setLastDirection(direction);
    alreadyRemoved.push(idToDelete);
    console.log(direction);
    setPhotoSwitchIdx(0);
  };
  const outOfFrame = (id) => {
    let oldCardState = people.filter((person) => {
      if (person.id === id) return true;
    });
    setRemovedCards(oldCardState);

    console.log("Current people", oldCardState);

    console.log(id + " left the screen!");
    let newCardState = people.filter((person) => {
      if (person.id !== id) return true;
    });

    console.log("set people", newCardState);
    setPeople(newCardState);
  };

  const swipe = (dir) => {
    const cardsLeft = people.filter((person) => {
      if (!alreadyRemoved.includes(person.id) && person.id !== 2) return true;
    });
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id; // Find the card object to be removed
      const index = people.map((person) => person.id).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      console.log(
        "here",
        dir,
        cardsLeft,
        toBeRemoved,
        index,
        "already",
        alreadyRemoved,
        "length",
        childRefs.length,
        childRefs[index - 1],
        "\n",
        people
      );
      if (dir === "up") {
        if (favPower !== 0) {
          let favSwipe = favHintRef.current;
          let favBtn = favBtnRef.current;

          favSwipe.style["z-index"] = 1;
          setTimeout(() => {
            childRefs[index].current.swipe(dir);
            favSwipe.style["z-index"] = -1;
            favBtn.blur();
            setFavPower(favPower <= 1 ? 0 : favPower - 1);
          }, 1799);
        }
      } else childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };
  const undo = () => {
    console.log("hrere", removedCards);
    setPhotoSwitchIdx(0);
    if (removedCards.length - 1 >= 0)
      setPeople([...people, removedCards[removedCards.length - 1]]);
  };

  //   useEffect(() => {
  //     dispatch(handleInitialData());
  //   }, [dispatch]);

  return (
    <S.TinderCardContainer>
      {people.map((person, index) => (
        <S.TinderCardSwipe key={`${person.id}-tinderCardSwipe`}>
          <TinderCard
            key={`${person.id}-tinderCard`}
            ref={childRefs[index]}
            preventSwipe={["down"]}
            onCardLeftScreen={() => outOfFrame(person.id)}
            onSwipe={(dir) => swiped(dir, person.id)}
          >
            <S.TinderCard
              style={{ backgroundImage: `url(${person.url[photoSwitchIdx]})` }}
              key={`${person.id}-TinderCardDiv`}
            >
              <S.PhotoSwitchBtnContainer>
                {[...new Array(6)].map(
                  (content, idx) =>
                    person.url[idx] &&
                    (photoSwitchIdx === idx ? (
                      <S.PhotoSwitchBtnExtender
                        key={`PhotoSwitchBtnExtender--${idx}`}
                        // tabindex={idx + index}
                      >
                        <S.PhotoSwitchBtn
                          // tabindex="1"
                          backgroundColor="white"
                          key={`photoSwitchBtn--${idx}`}
                        />
                      </S.PhotoSwitchBtnExtender>
                    ) : (
                      <S.PhotoSwitchBtnExtender
                        key={`PhotoSwitchBtnExtender--${idx}`}
                        onClick={() => {
                          console.log("in here", idx);
                          setPhotoSwitchIdx(idx);
                        }}
                        // tabindex={idx + index}
                      >
                        <S.PhotoSwitchBtn
                          // tabindex="1"
                          key={`photoSwitchBtn--${idx}`}
                        />
                      </S.PhotoSwitchBtnExtender>
                    ))
                )}
              </S.PhotoSwitchBtnContainer>
              <S.SuperLikeHint ref={favHintRef} id="super-like">
                SUPER LIKE
              </S.SuperLikeHint>
              <S.UserDataContainer key={`${person.id}-UserDetails>`}>
                <S.UserDetails>
                  <S.UserName>{person.firstName}</S.UserName>
                  <S.UserAge>{person.age}</S.UserAge>
                </S.UserDetails>
                <S.PassionsContainer>
                  {person.passions
                    .trim()
                    .split(",")
                    .map(
                      (p, idx) =>
                        idx !== 10 &&
                        (authUser.passions
                          .toLowerCase()
                          .search(p.toLowerCase()) !== -1 ? (
                          <S.PassionContainer
                            key={`${person.id}-passion-${idx}`}
                          >
                            <S.Passion>{p}</S.Passion>
                          </S.PassionContainer>
                        ) : (
                          <S.PassionContainer
                            background="rgba(0,0,0,.3)"
                            key={`${person.id}-passion-${idx}`}
                          >
                            <S.Passion>{p}</S.Passion>
                          </S.PassionContainer>
                        ))
                    )}
                </S.PassionsContainer>
                <S.About>{person.about.substring(0, 155)}...</S.About>
              </S.UserDataContainer>
              <S.ViewProfile
                onClick={() => history.push(`profile/${person.id}`)}
              />
            </S.TinderCard>
          </TinderCard>
        </S.TinderCardSwipe>
      ))}
      <S.SwipeButtonsContainer>
        <S.SwipeIconButton fill="#ffb203" onClick={() => undo()}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12.119 4.599V3.307c0-1.216-.76-1.672-1.824-.988l-.608.304L6.04 5.13l-.456.304c-1.064.76-1.064 1.748 0 2.28l.38.38c.987.76 2.66 1.824 3.647 2.432l.532.304c.912.76 1.748.228 1.748-.912V8.246a5.125 5.125 0 0 1 5.167 5.167c0 2.888-2.28 5.092-5.167 5.092-3.04 0-5.32-2.28-5.32-5.168 0-.912-.76-1.671-1.747-1.671-1.064 0-1.824.76-1.824 1.671C3 18.125 6.951 22 11.815 22c4.787 0 8.738-3.8 8.738-8.663.076-4.711-3.875-8.51-8.662-8.51l.228-.228z"></path>
          </svg>
        </S.SwipeIconButton>
        <S.SwipeIconButton
          fill="#fe4b6b"
          width="34px"
          height="34px"
          onClick={() => swipe("left")}
        >
          <S.Svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"></path>
          </S.Svg>
        </S.SwipeIconButton>
        <S.SwipeIconButton
          fill="#24b9ff"
          ref={favBtnRef}
          onClick={() => swipe("up")}
        >
          <S.Svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"></path>
          </S.Svg>
          <p> {favPower}</p>
          <p> {favPower === 0 ? 0 : favPower - 1}</p>
        </S.SwipeIconButton>
        <S.SwipeIconButton fill="#38e9ba" onClick={() => swipe("right")}>
          <S.Svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"></path>
          </S.Svg>
        </S.SwipeIconButton>
        <S.SwipeIconButton fill="#9b4ed9">
          <S.Svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z"></path>
          </S.Svg>
        </S.SwipeIconButton>
      </S.SwipeButtonsContainer>
    </S.TinderCardContainer>
  );
};
