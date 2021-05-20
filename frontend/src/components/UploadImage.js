import React, { useState } from "react";
import Files from "react-butterfiles";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { bounce, rubberBand, shakeX } from "../shared//keyframes";
import PublishIcon from "@material-ui/icons/Publish";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { Link, useHistory } from "react-router-dom";

import "../index.css";
export const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const S = {};
  S.UploadImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  `;
  S.IconButton = styled(IconButton)`
    &:nth-child(1) {
      position: absolute !important;
      right: 55px;
      top: 5px;
      &:hover {
        animation-name: ${rubberBand};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
      }
      ${!images.length &&
      ` 
        display: none;
      `};
    }
    &:nth-child(2) {
      position: absolute !important;
      right: 5px;
      top: 5px;
      &:hover {
        animation-name: ${shakeX};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
      }
    }
  `;
  S.CloudDoneIcon = styled(CloudDoneIcon)`
    color: #1976d2;
    /* border: 2px solid red; */
  `;
  S.CloseIcon = styled(CloseIcon)`
    color: #5c5c5c;
    stroke: #5c5c5c;

    /* border: 2px solid red; */
  `;
  S.HeaderTitle = styled.h2`
    padding: 20px 20px 10px 20px;
    color: #fb3333;
    font-family: "Montserrat", sans-serif;
    /* border: 2px solid red; */
  `;
  S.HeaderDescription = styled.p`
    padding: 0px 20px 20px 20px;
    font-size: 15px;
    color: #616180;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    /* border: 2px solid red; */
  `;
  S.CardTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 52px 20px 0px 20px;
    font-family: "Montserrat", sans-serif;
    /* border: 2px solid red; */
  `;
  S.CardTitle = styled.h2`
    font-family: "Montserrat", sans-serif;
    color: white;

    /* border: 2px solid red; */
  `;
  S.CardDescription = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    color: white;
    margin-left: 5px;
    margin-bottom: 2px;
    /* border: 2px solid red; */
  `;
  S.CardContainer = styled.div`
    background-image: ${(props) =>
      props.backgroundImage ? props.backgroundImage : "none"};
    background-size: 100%;
    background-repeat: no-repeat;
    width: 95%;
    height: 146px;
    max-height: 146px;
    margin: auto;
    /* border: 2px groove inherit; */
    padding-bottom: 5px;
    margin: ${(props) => (props.margin ? props.margin : "auto")};
    background-position: center;
    height: 10vh;
    min-height: 150px;
    border-radius: 30px;
    max-width: 800px;

    /* border: 2px solid red; */
  `;

  S.UploadArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px !important;
  `;
  S.FilesData = styled.ol`
    display: flex;
    flex: 0.95;
    background: rgba(245, 247, 250, 0.5) !important;
    border-bottom: 2px gray dashed;
    border-radius: 20px;

    /* border: 2px solid red; */
  `;
  S.FilesListContainer = styled.div`
    width: auto;
    /* background: rgba(245, 247, 250, 0.5); */
    border-radius: 20px;
    padding: 5px 12px 5px 12px;
    margin-left: auto;
    margin-right: auto;
    min-width: 160px;

    /* border: 2px solid darkblue; */
  `;
  S.ErrorsListContainer = styled.div`
    width: auto;
    /* background: rgba(245, 247, 250, 0.5); */
    border-radius: 20px;
    padding: 5px 12px 5px 25px;
    margin-left: auto;
    margin-right: auto;
    min-width: 160px;
    /* border: 2px solid darkred; */
  `;
  S.FileList = styled.li`
    color: #353535;
    font-weight: bolder;
    text-shadow: 1px 0px 1px #61ff66, 0px 1px 1px #eeeeee, 2px 1px 1px #61ff66,
      1px 2px 1px #eeeeee, 3px 2px 1px #61ff66, 2px 3px 1px #eeeeee,
      4px 3px 1px #61ff66, 3px 4px 1px #eeeeee, 5px 4px 1px #61ff66,
      4px 5px 1px #eeeeee, 6px 5px 1px #61ff66, 5px 6px 1px #eeeeee,
      7px 6px 1px #61ff66;
    /* border: 2px solid blue; */
  `;
  S.ErrorList = styled.li`
    color: #353535;
    font-weight: bolder;
    cursor: help;
    text-shadow: 1px 0px 1px #fff708, 0px 1px 1px #eeeeee, 2px 1px 1px #fff708,
      1px 2px 1px #eeeeee, 3px 2px 1px #fff708, 2px 3px 1px #eeeeee,
      4px 3px 1px #fff708, 3px 4px 1px #eeeeee, 5px 4px 1px #fff708,
      4px 5px 1px #eeeeee, 6px 5px 1px #fff708, 5px 6px 1px #eeeeee,
      7px 6px 1px #fff708;

    &:hover span span {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: inline-block;
      }
    }

    /* border: 2px solid green; */
  `;
  S.ImageName = styled.span``;
  S.ErrorImageName = styled.span`
    display: none;
  `;
  S.ErrorType = styled.span``;
  S.Fragment = styled(React.Fragment)``;

  S.UploadImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
    height: 40px;
    padding-top: 5px;
    /* border: 2px red solid; */
  `;
  S.CloudUploadIcon = styled(CloudUploadIcon)``;
  S.PublishIcon = styled(PublishIcon)`
    color: #1976d2 !important;
    stroke: #ffffff !important;
  `;

  S.UploadImagesButton = styled(Button)`
    text-align: center;
    color: white !important;
    width: 120px;
    background-color: #2180e8 !important;

    &:hover ${S.CloudUploadIcon} {
      animation-name: ${bounce};
      animation-duration: 0.7s;
      animation-timing-function: ease-in-out;
    }
  `;
  S.UploadImagesHint = styled.span`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 8px;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
    font-weight: bolder;
    color: #ffffff;
    text-shadow: 2px 2px 0 #2180e8, 2px -2px 0 #2180e8, -2px 2px 0 #2180e8,
      -2px -2px 0 #2180e8, 2px 0px 0 #2180e8, 0px 2px 0 #2180e8,
      -2px 0px 0 #2180e8, 0px -2px 0 #2180e8;
  `;
  const UPLOAD_AREA_STYLE_PROP = {
    style: {
      width: "95%",
      margin: "auto",
      height: "10vh",
      maxWidth: 800,
      minHeight: 150,
      maxHeight: 200,
      // border: "2px #ff5765 groove",
      borderRadius: "30px",
      backgroundColor: "rgba(255,255,255,0.15)",
      backgroundBlendMode: "lighten",
      backgroundImage:
        'url("https://tinder.com/static/build/33f6a9cb003d5e11ea46d1d91c8e442d.webp")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  };
  return (
    <S.UploadImageContainer>
      <S.HeaderTitle>
        Create New
        <S.IconButton>
          <S.CloudDoneIcon onClick={() => history.push("/account")} />
        </S.IconButton>
        <S.IconButton onClick={() => history.push("/account")}>
          <S.CloseIcon />
        </S.IconButton>
      </S.HeaderTitle>
      <S.HeaderDescription>Select a content type</S.HeaderDescription>
      <S.CardContainer
        margin="auto auto 20px auto"
        backgroundImage='url("https://tinder.com/static/build/b4a07652e7db8c8679929ab89b94881b.webp");'
      >
        <S.CardTextContainer>
          <S.CardDescription>Create a new</S.CardDescription>
          <S.CardTitle>Prompt</S.CardTitle>{" "}
        </S.CardTextContainer>
      </S.CardContainer>
      <Files
        multiple={true}
        maxSize="2mb"
        multipleMaxSize="10mb"
        accept={["image/png", "image/jpg", "image/jpeg"]}
        onSuccess={(files) => {
          let fileArry = [...files, ...images];
          setImages(fileArry.slice(0, 5));
        }}
        onError={(e) => {
          let errArry = [...e, ...errors];
          setErrors(errArry.slice(0, 5));
        }}
        multipleMaxCount={5}
        convertToBase64={true}
      >
        {({ browseFiles, getDropZoneProps }) => {
          return (
            <S.UploadArea {...getDropZoneProps(UPLOAD_AREA_STYLE_PROP)}>
              <S.FilesData>
                <S.FilesListContainer>
                  {images.map((file, index) => (
                    <S.FileList key={file.name}>
                      <S.ImageName>
                        {`${
                          file.name.length < 20
                            ? file.name
                            : `${file.name
                                .substring(0, file.name.indexOf("."))
                                .substring(0, 10)}
                            ...${file.name.substring(file.name.length - 10)}`
                        }`}
                      </S.ImageName>
                    </S.FileList>
                  ))}
                </S.FilesListContainer>
                <S.ErrorsListContainer>
                  {errors.map((error) => (
                    <S.ErrorList key={error.id}>
                      {error.file ? (
                        <span>
                          <S.ErrorType>{`${error.type}`}</S.ErrorType>
                          <S.ErrorImageName>
                            {`${error.file.name.substring(
                              0,
                              10
                            )}...${error.file.name.substring(
                              error.file.name.length - 10
                            )}`}
                          </S.ErrorImageName>
                        </span>
                      ) : (
                        error.type
                      )}
                    </S.ErrorList>
                  ))}
                </S.ErrorsListContainer>
              </S.FilesData>
              <S.UploadImagesContainer>
                <S.UploadImagesHint>
                  Drag and Drop <S.PublishIcon />
                </S.UploadImagesHint>

                <S.UploadImagesButton
                  variant="contained"
                  color="default"
                  startIcon={<S.CloudUploadIcon />}
                  onClick={browseFiles}
                >
                  Upload
                </S.UploadImagesButton>
                <S.UploadImagesHint fontSize="14px">
                  Upload Limit: {images.length} / 5
                </S.UploadImagesHint>
              </S.UploadImagesContainer>
            </S.UploadArea>
          );
        }}
      </Files>
      <S.CardContainer
        margin="20px auto auto auto"
        backgroundImage='url("https://tinder.com/static/build/a07b4f45f6f40b94d21568fc8c46f99d.webp")'
      >
        {" "}
        <S.CardTextContainer>
          <S.CardDescription>Capture from</S.CardDescription>
          <S.CardTitle>Camera</S.CardTitle>{" "}
        </S.CardTextContainer>
      </S.CardContainer>
    </S.UploadImageContainer>
  );
};
