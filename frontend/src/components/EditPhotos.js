import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import {
  bounce,
  shakeX,
  jello,
  shake,
  scaleUp,
  fadeAway,
} from "../shared//keyframes";
import "../index.css";
import "array.prototype.move";

import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable,
} from "react-reorder";
import { useState } from "react";
import { useCallback } from "react";
import "../index.css";

export const EditPhotos = () => {
  const [photos, setPhotos] = useState([
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      id: 1,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,

      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      id: 3,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,

      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      id: 5,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,

      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      id: 7,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 8,

      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
  ]);

  const OnReorder = useCallback(
    (event, previousIndex, nextIndex, fromId, toId) => {
      console.log("ayyyo", event, previousIndex, nextIndex);
      if (nextIndex < photos.length)
        setPhotos([...photos.move(previousIndex, nextIndex)]);
      console.log("here", fromId, toId);
    },
    [photos] // Tells React to memoize regardless of arguments
  );

  const S = {};

  S.CardContainer = styled.div`
    margin-top: 5px;
    padding: 4px;
    background-color: #f5f7fa;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    /* border: 2px red solid; */
  `;
  S.Reorder = styled(Reorder)`
    margin-top: 5px;
    padding: 4px;
    background-color: #f5f7fa;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;

    /* & .dragged {
      background-color: #eee;
      transform: scale(0.98, 0.98);
      opacity: 0.7;
    } */

    /* & .placeholder {
      background-color: #ccc;
      border: 2px solid #ccc;

      .inner {
        visibility: hidden;
      } */
    /* } */

    & > span:not(hover) > .card:active {
      animation: ${scaleUp};
      transform-origin: center;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    &:active > span .cardNumber {
      display: inline;
    }

    &:active:hover .delete {
      animation: ${fadeAway};
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  `;

  S.CardBox = styled.span`
    position: relative;
    width: 147.828px;
    height: 193.453px;
    margin: 6px;

    height: ${(props) => (props.height ? props.height : "")};
    max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : ""};
    border: ${(props) => (props.border ? props.border : "")};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
    cursor: ${(props) => (props.cursor ? props.cursor : "grab")};
    pointer-events: ${(props) =>
      props.pointerEvents ? props.pointerEvents : ""};

    /* &
      > span:nth-child(${(props) => (props.index ? props.index : "")})
      .cardBox
      .card:active {
      display: none;
    } */
  `;

  S.CardNumber = styled.p`
    font-size: 2.2rem;
    line-height: 1.3125;
    display: none;
    font-weight: bolder;
    position: absolute;
    padding: 12px;
    color: white;
    top: 0;
    left: 0;
    font-family: "Montserrat", sans-serif;
  `;
  S.Placeholder = styled.div`
    position: relative;
    width: 147.828px;
    height: 193.453px;
    margin: 6px;
    border-radius: 8px;
  `;

  S.CardBlank = styled.div`
    height: 100%;
    max-height: 193.453;
    background-color: #e0e4e9;
    border-radius: 8px;
    border: 4px #dadfe6 dashed;
  `;

  S.Card = styled.img`
    /* background-image: ${(props) =>
      props.backgroundImage ? props.backgroundImage : ""};
    background-position: 50% 50%;
    background-size: 100%;
    background-repeat: no-repeat; */
    cursor: grab;
    border-radius: 8px;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    max-height: 193.453;
    object-fit: cover;
    box-sizing: inherit;
  `;
  S.IconButton = styled(IconButton)`
    position: absolute !important;
    bottom: -12px !important;
    right: -6px !important;
    padding: 0 !important;
  `;

  S.DeleteIcon = styled.svg`
    /* padding: 0vw !important; */
    background: white;
    border-radius: 25px;
    width: 16px;
    height: 16px;
    padding: 6px;
    & > path {
      fill: #fe4b6b;
      /* stroke: #fff4f5; */
    }
    &:hover {
      animation-name: ${jello};
      transform-origin: center;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
  `;

  S.AddIcon = styled.svg`
    /* padding: 0vw !important; */
    background: #fd5068;
    border-radius: 25px;
    width: 16px;
    height: 16px;
    padding: 6px;
    & > path {
      fill: white;
      /* stroke: #fff4f5; */
    }
    &:hover {
      animation-name: ${jello};
      transform-origin: center;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
  `;
  return (
    <div>
      <S.Reorder
        reorderId="research"
        className={"reorder"}
        //   lock="horizontal"
        holdTime={1000}
        component="span"
        mouseHoldTime={100}
        onReorder={OnReorder}
        autoScroll={true}
        disabled={false}
        disableContextMenus={true}
        placeholder={
          <S.Placeholder /> // Custom placeholder element (optional), defaults to clone of dragged element
        }
      >
        {[...new Array(9)].map((content, idx) =>
          idx <= photos.length - 1 ? (
            <S.CardBox className="cardBox" key={photos[idx].id}>
              <S.Card className="card" src={photos[idx].url} />
              {/* <img src={photos[idx].url}></img> */}
              <S.CardNumber className="cardNumber">{idx}</S.CardNumber>
              <S.IconButton>
                <S.DeleteIcon
                  className="delete"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"></path>
                </S.DeleteIcon>
              </S.IconButton>
            </S.CardBox>
          ) : (
            [
              photos.length - 1 < 7 ? (
                <S.CardBox
                  className="cardBox"
                  key={idx + photos.length - 1}
                  height="193.453px"
                  maxHeight="193.453px"
                  backgroundColor="#e0e4e9"
                  border="4px #dadfe6 dashed"
                  borderRadius="8px"
                  cursor="not-allowed"
                  pointerEvents="none"
                >
                  <S.IconButton>
                    <S.AddIcon
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                    </S.AddIcon>
                  </S.IconButton>
                </S.CardBox>
              ) : (
                <S.CardBox
                  className="cardBox"
                  key={idx + photos.length - 1}
                  cursor="pointer"
                >
                  <S.Card className="card" src={photos[idx].url} />
                </S.CardBox>
              ),
            ]
          )
        )}
      </S.Reorder>
    </div>
  );
};
