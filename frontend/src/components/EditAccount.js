import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

import { bounce, shakeX, jello } from "../shared//keyframes";
import "../index.css";
import { EditPhotos } from "./EditPhotos";

export const EditAccount = () => {
  const S = {};
  S.EditAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
  `;
  S.Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #f9f9f9;
    box-shadow: 0px 4px 10px -4px hsl(0deg 0% 23% / 32%);
    background-color: #ffffff;

    /* border: 2px red solid; */
  `;
  S.HeaderTitle = styled.h3`
    text-align: center;
    flex: 1;
    font-family: "Montserrat", sans-serif;
    padding-left: 43.781px;
    /* border: 2px blue solid; */
  `;

  S.Done = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: red;
    border-radius: 20px;
    padding-right: 10px;
    margin: 0;
    cursor: pointer;
  `;
  S.ReorderHint = styled.p`
    color: #5c5c5c;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    padding-top: 5px;
  `;
  S.IconButton = styled(IconButton)`
    color: white !important;
    font-size: 14px !important;
    font-weight: bolder !important;
    border-radius: 8px !important;
    width: 80vw;

    height: 40px;
    margin-top: 10px !important;
    background: ${(props) =>
      props.background === "none"
        ? ""
        : "linear-gradient(262deg, #ff7854, #fd267d)"};
    background-image: ${(props) =>
      props.backgroundImage === "none"
        ? ""
        : `linear-gradient(262deg,
      rgb(255, 120, 84),
      rgb(253, 38, 125)
    )`};
  `;
  S.AddMediaTxt = styled.p`
    color: #ffffff;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    padding: 7px;
  `;
  S.AboutMe = styled(TextField)`
    background: white;
    & label.Mui-focused {
      color: white;
    }
    & .MuiInput-underline:after {
      border-bottom-color: white;
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: white;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  `;

  return (
    <S.EditAccountContainer>
      <S.Header>
        <S.HeaderTitle>Edit Info</S.HeaderTitle>
        <S.Done>Done</S.Done>
      </S.Header>
      <EditPhotos />
      <S.ReorderHint>Hold, drag and drop to reorder your photos</S.ReorderHint>
      <S.IconButton>
        <S.AddMediaTxt>ADD MEDIA</S.AddMediaTxt>
      </S.IconButton>
      <S.AboutMe
        id="filled-multiline-static"
        label=""
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
        InputProps={{ disableUnderline: true }}
      />

      {/* <div>
        <div></div>
        <div></div>
        <div>
          <p></p>
        </div>
      </div> */}
    </S.EditAccountContainer>
  );
};
