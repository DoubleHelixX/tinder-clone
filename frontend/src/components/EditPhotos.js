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
const Cell = (props) => (
  <div
    style={{
      backgroundColor: "lightpink",
      border: "1px solid green",
      padding: 20,
      userSelect: "none",
    }}
  >
    {props.name}
  </div>
);

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

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 5,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 6,

      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
  ]);

  const OnReorder = useCallback(
    (event, previousIndex, nextIndex) => {
      console.log("ayyyo", event, previousIndex, nextIndex);
      setPhotos([...photos.move(previousIndex, nextIndex)]);
      console.log("here", photos);
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

    & > span:not(hover) > .card:active {
      animation: ${scaleUp};
      transform-origin: center;
      animation-duration: 0.5s;
      /* animation-timing-function: ease-in-out; */
      animation-fill-mode: forwards;
    }

    &:active .delete {
      animation: ${fadeAway};
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    /* & > span > .card:active {
      display: none;
    } */
  `;

  S.CardBox = styled.span`
    position: relative;
    width: 147.828px;
    height: 193.453px;
    margin: 6px;
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
    >
      {photos.map((photo, idx) => (
        <S.CardBox key={photo.id}>
          <S.Card className="card" src={photo.url} />
          {/* <img src={photo.url}></img> */}
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
      ))}
    </S.Reorder>
  );
};
