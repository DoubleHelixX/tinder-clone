import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const Account = () => {
  const S = {};
  S.AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  S.AccountAvatar = styled.div``;
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
  S.ButtonContainer = styled.div``;
  S.SettingBtn = styled.div``;
  S.MediaBtn = styled.div``;
  S.SafetyBtn = styled.div``;
  S.TipContainer = styled.div`
    display: flex;
    align-items: center;
    background: rgb(255, 117, 86);
    background: linear-gradient(
      87deg,
      rgba(255, 117, 86, 1) 0%,
      rgba(255, 98, 141, 1) 79%,
      rgba(246, 77, 143, 1) 100%
    );
    border-radius: 10px;
    padding: 10px 8px;
    margin: 15px;
  `;
  S.Tip = styled.p`
    color: white;
    flex: 1;

    /* font-size: 12px; */
  `;
  S.Plus = styled(AddCircleIcon)`
    background-color: transparent;
    color: white;
    padding: 0 0 0 15px;
    /* border-radius: 20px; */
  `;
  S.AdContainer = styled.div``;
  S.Ad = styled.p``;

  return (
    <S.AccountContainer>
      <S.AccountAvatar />
      <S.UserDetails>Nel, 102</S.UserDetails>
      <S.Occupation>Software Developer at Freelance</S.Occupation>
      <S.School>CUNY New York City College of Technology</S.School>
      <S.ButtonContainer>
        <S.SettingBtn />
        <S.MediaBtn />
        <S.SafetyBtn />
      </S.ButtonContainer>
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
