import React from "react";
import styled from "styled-components";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import nel from "../images/nel.png";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import IconButton from "@material-ui/core/IconButton";

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
  S.EditIcon = styled(EditIcon)`
    color: #bebdc1;
    border-radius: 30px;
    background-color: #f9f9f9;
    /* border: 2px red solid; */
    position: absolute;
    top: 10px;
    right: 5px;
    padding: 8px;
    border: 2px solid #b1b1b1;
    cursor: pointer;
    &:hover {
      border: 2px groove #b1b1b1;
    }
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
    display: block;
    position: relative;
    /* padding: 10px; */
    /* border: red 2px solid; */
  `;
  S.SettingsIcon = styled(SettingsIcon)`
    color: #98969c;
    border-radius: 30px;
    background-color: white;
    padding: 12px;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);
    border: 2px outset #fdfdfd;
  `;
  S.PhotoCameraIcon = styled(PhotoCameraIcon)`
    color: white;
    border-radius: 30px;
    background-color: #ff5765;
    padding: 12px;
    box-shadow: 0px 5px 53px 0px rgba(0, 0, 0, 0.3);
    border: 2px outset #fdfdfd;
  `;
  S.VerifiedUserTwoToneIcon = styled(VerifiedUserTwoToneIcon)`
    color: #98969c;
    border-radius: 30px;
    background-color: white;
    padding: 12px;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);
    border: 2px outset #fdfdfd;
  `;
  S.ButtonsText = styled.p`
    color: #98969c;
    font-family: Arial, sans-serif;
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
    padding: 10px 8px;
    margin: 15px;
    width: 84.783vw;
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
    bottom: 5px;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.1);
    border: 1px outset #fdfdfd;
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
        <S.EditIcon
          style={{ height: "25px", width: "25px" }}
          fontSize="default"
        />
      </S.AvatarContainer>

      <S.UserDetails>Nel, 102</S.UserDetails>
      <S.Occupation>Software Developer at Freelance</S.Occupation>
      <S.School>CUNY New York City College of Technology</S.School>
      <S.ButtonsContainer>
        <S.ButtonContainer>
          <IconButton>
            <S.SettingsIcon style={{ height: "25px", width: "25px" }} />
          </IconButton>
          <S.ButtonsText>SETTINGS</S.ButtonsText>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <IconButton>
            <S.PhotoCameraIconContainer>
              <S.PhotoCameraIcon fontSize="large" />
              <S.PlusMedia />
            </S.PhotoCameraIconContainer>
          </IconButton>
          <S.ButtonsText>ADD MEDIA</S.ButtonsText>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <IconButton>
            <S.VerifiedUserTwoToneIcon
              style={{ height: "25px", width: "25px" }}
            />
          </IconButton>
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
