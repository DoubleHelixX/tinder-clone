import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import { bounce, shakeX, jello } from "../shared//keyframes";
import "../index.css";
import { EditPhotos } from "./EditPhotos";

export const EditAccount = () => {
  const S = {};
  S.EditAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  S.Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #f9f9f9;
    box-shadow: 0px 4px 10px -4px hsl(0deg 0% 23% / 32%);

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

  return (
    <S.EditAccountContainer>
      <S.Header>
        <S.HeaderTitle>Edit Info</S.HeaderTitle>
        <S.Done>Done</S.Done>
      </S.Header>
      <EditPhotos />
      <div>
        <div></div>
        <div></div>
        <div>
          <p></p>
        </div>
      </div>
    </S.EditAccountContainer>
  );
};
