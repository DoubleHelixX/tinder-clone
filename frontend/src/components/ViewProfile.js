import React, { useState } from "react";
import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";

import "../index.css";

const S = {};
S.AddMediaTxt = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  padding: 7px;
`;
S.TFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;
S.TFTitle = styled.p`
  align-self: flex-start;
  padding: 10px;
  padding-bottom: 6px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #655c66;
  /* border: 2px blue solid; */
`;
S.AboutMeTF = styled.span`
  div {
    padding: 20px;
    /* border: 2px blue solid; */
  }
  .MuiFilledInput-root {
    background: #fff;
    width: 100vw;
    height: 339px;
    border: 1px solid #e8e8e8;
    & textarea {
      height: 100%;
      /* border: 2px red solid; */
    }
    &:hover {
      background: white;
      box-shadow: 0px 2px 33px 0px rgba(0, 0, 0, 0.02);
    }
  }
  /* & label.Mui-focused {
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
    } */
`;
S.TFCounter = styled.p`
  align-self: flex-start;
  padding: 10px;
  padding-bottom: 6px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #655c66;
  position: absolute;
  bottom: 8px;
  right: 10px;
`;

export const ViewProfile = () => {
  const [TF, setTF] = useState({
    about: `Good vibes. 😌
            Hairstyles. 💇🏾‍♀️
            Stoner. 🍃
            Looking for people with good intentions with a lit personality that love getting high asf. ‼️.
            Snapchat @ melanin_thepyt
            Sn- Not A Actual Girl`,
    passions: "cat lover, cooking, traveling",
    job: " Retail",
    company: "None",
    school: "Cuny of whatever",
    living: "New York",
    gender: "Female",
    sex: " straight",
  });
  return (
    <div>
      <div className="TFContainer">
        <S.TFTitle>About Tommy</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="aboutMETF"
          inputProps={{ maxLength: 500, readOnly: true, disabled: true }}
        />
      </div>
      <div className="TFContainer">
        <S.TFTitle>Passions</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="passionsTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>
      <div className="TFContainer">
        <S.TFTitle>Job Title</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="jobTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>
      <div className="TFContainer">
        <S.TFTitle>Company</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="companyTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>
      <div className="TFContainer">
        <S.TFTitle>School</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="schoolTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>
      <div className="TFContainer">
        <S.TFTitle>Living In</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="livingTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>

      <div className="TFContainer">
        <S.TFTitle>Gender</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="genderTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
        {/* <S.TFCounter key="genderCount">
          {46 - (TF.gender ? TF.gender.length : 0)}
        </S.TFCounter> */}
      </div>
      <div className="TFContainer">
        <S.TFTitle>Sexual Orientation</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={""}
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          key="sexTF"
          inputProps={{ maxLength: 58, readOnly: true, disabled: true }}
        />
      </div>
    </div>
  );
};
