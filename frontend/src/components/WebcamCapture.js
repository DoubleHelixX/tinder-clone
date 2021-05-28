import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import { bounce, shakeX } from "../shared//keyframes";

const S = {};

S.CloudDoneIcon = styled(CloudDoneIcon)`
  color: #ffffff;
  stroke: #1976d2;
  animation-name: ${bounce};
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  /* border: 2px red solid !important; */
  /* border: 2px solid red; */
`;
S.WebcamCaptureContainer = styled.div`
  display: block;
  overflow: hidden;
  & .cloudIcon:hover ${S.CloudDoneIcon} {
    fill: #1976d2;
    stroke: white;
  }

  /* border: 2px red solid; */
`;
S.IconButton = styled(IconButton)`
  position: absolute !important;
  top: 20px !important;
  left: ${(props) => (props.left ? props.left : "")};
  right: ${(props) => (props.right ? props.right : "")};
  &:hover .closeIcon {
    animation-name: ${shakeX};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }
`;
S.CloseIcon = styled(CloseIcon)`
  color: #e8e8e8;
  stroke: #e8e8e8;
  /* border: 2px solid red; */
`;

S.CaptureImg = styled.img`
  display: block;
  position: absolute;
  /* border: white groove 8px; */
  top: 20px;
  right: 20px;
  width: 150px;
  height: auto;
  object-fit: contain;
  border-radius: 35px;
  -webkit-box-shadow: 4px 0px 0px 0px #fe3d71, 0px 2px 0px 0px #ff5765,
    -2px 0px 0px 0px #f2cc71, 0px 0px 0px 2px rgba(255, 111, 49, 1),
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 2px 0px 0px 0px #fe3d71, 0px 2px 0px 0px #ff5765,
    -2px 0px 0px 0px #f2cc71, 0px 0px 0px 2px rgba(255, 111, 89, 1),
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 40px 0px 40px 0px;
`;
S.Webcam = styled(Webcam)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
S.CaptureBtn = styled.button`
  display: block;
  font-size: 30px;
  position: absolute;
  bottom: 50px;
  left: 41vw;
  border-radius: 50px;
  padding: 10px;
  background-color: #5c5c5c;
  border: white 10px groove;
  width: 90px;
  height: 90px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #5c5c5c;
    border: white 10px double;
    /* background-color: lightgray; */
  }
  @media (min-width: 532px) {
    left: 47vw;
  }
`;

export const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const history = useHistory();

  return (
    <S.WebcamCaptureContainer>
      <S.Webcam
        forceScreenshotSourceSize={false}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <S.IconButton
        left="20px !important"
        onClick={() => history.push("/account/media")}
      >
        <S.CloseIcon className="closeIcon" />
      </S.IconButton>

      <S.CaptureBtn onClick={capture}>📸</S.CaptureBtn>
      {imgSrc && (
        <span>
          <S.CaptureImg src={imgSrc} />
          <S.IconButton className="cloudIcon" right="20px">
            <S.CloudDoneIcon onClick={() => history.push("/account/media")} />
          </S.IconButton>
        </span>
      )}
    </S.WebcamCaptureContainer>
  );
};
