import React, { useCallback, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

import { bounce, jello, rubberBand } from "../shared//keyframes";
import "../index.css";
import { EditPhotos } from "./EditPhotos";
import { useHistory } from "react-router-dom";

const S = {};
S.EditAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    border: 1px double rgb(255, 255, 255);
    padding: 2px 0;
    background-color: #f3f3f3;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px #c7c7c7;
    background-color: #fe3c7380;
    border: 1px solid rgb(255, 255, 255);
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 3px;
    visibility: collapse;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
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
  padding-left: 68.781px;
  /* border: 2px blue solid; */
`;

S.Done = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: red;
  border-radius: 20px;
  padding-right: 25px;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: #1976d2;
  }
`;
S.ReorderHint = styled.p`
  margin-top: 23px;
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
  margin-top: 12px !important;
  margin-bottom: 12px !important;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 27%);

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
  )
  `};
  &:hover .addMediaTxt {
    animation-name: ${rubberBand};
    transform-origin: center;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }
`;
S.SmartPhotosContainer = styled.div`
  height: 54px;
  width: 100vw;
  background-color: white;
  border: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  & .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #fd297b;
  }
  & .MuiSwitch-colorSecondary.Mui-checked {
    color: #ff7755;
  }
`;
S.SmartPhotos = styled.p`
  padding: 12px;
  flex: 1;
  font-family: "Montserrat", sans-serif;
`;

S.SmartPhotosHint = styled.div`
  padding: 12px;
  font-size: 12px;
  color: #655c66;
  font-family: "Montserrat", sans-serif;
`;

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

export const EditAccount = () => {
  const history = useHistory();
  const [TF, setTF] = useState({
    about: "",
    passions: "",
    job: "",
    company: "",
    school: "",
    living: "",
    gender: "",
    sex: "",
  });

  const handleTF = (e, type) => {
    e.preventDefault();
    console.log("here", e.target.value.length, type);
    setTF({
      about: type === "about" ? e.target.value : TF.about,
      passions: type === "passions" ? e.target.value : TF.passions,
      job: type === "job" ? e.target.value : TF.job,
      company: type === "company" ? e.target.value : TF.company,
      school: type === "school" ? e.target.value : TF.school,
      living: type === "living" ? e.target.value : TF.living,
      gender: type === "gender" ? e.target.value : TF.gender,
      sex: type === "sex" ? e.target.value : TF.sex,
    });
  };
  return (
    <div className="EditAccountContainer">
      <S.Header>
        <S.HeaderTitle>Edit Info</S.HeaderTitle>
        <S.Done onClick={() => history.push("/account")}>Done</S.Done>
      </S.Header>
      <EditPhotos />
      <S.ReorderHint>Hold, drag and drop to reorder your photos</S.ReorderHint>
      <S.IconButton onClick={() => history.push("/account/media")}>
        <S.AddMediaTxt className="addMediaTxt">ADD MEDIA</S.AddMediaTxt>
      </S.IconButton>
      <S.SmartPhotosContainer>
        <S.SmartPhotos>Smart Photos</S.SmartPhotos>
        <Switch
          // checked={state.checkedA}
          // onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </S.SmartPhotosContainer>
      <S.SmartPhotosHint>
        Smart Photos continuously tests all of your profile photos and picks the
        best one to show first.
      </S.SmartPhotosHint>
      <div className="TFContainer">
        <S.TFTitle>About Tommy</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue={TF.about ? TF.about : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "about")}
          key="aboutMETF"
          inputProps={{ maxLength: 500 }}
        />
        <S.TFCounter key="aboutMeCount">
          {500 - (TF.about ? TF.about.length : 0)}
        </S.TFCounter>
      </div>
      <div className="TFContainer">
        <S.TFTitle>Passions</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label='Separate by commas ","'
          rows={4}
          defaultValue={TF.passions ? TF.passions : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "passions")}
          key="passionsTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="passionsCount">
          {46 - (TF.passions ? TF.passions.length : 0)}
        </S.TFCounter> */}
        {/* maxLength: 46  */}
      </div>
      <div className="TFContainer">
        <S.TFTitle>Job Title</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={TF.job ? TF.job : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "job")}
          key="jobTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="jobCount">
          {46 - (TF.job ? TF.job.length : 0)}
        </S.TFCounter> */}
      </div>
      <div className="TFContainer">
        <S.TFTitle>Company</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={TF.company ? TF.company : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "company")}
          key="companyTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="companyCount">
          {46 - (TF.company ? TF.company.length : 0)}
        </S.TFCounter> */}
      </div>
      <div className="TFContainer">
        <S.TFTitle>School</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={TF.school ? TF.school : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "school")}
          key="schoolTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="schoolCount">
          {46 - (TF.school ? TF.school.length : 0)}
        </S.TFCounter> */}
      </div>
      <div className="TFContainer">
        <S.TFTitle>Living In</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={TF.living ? TF.living : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "living")}
          key="livingTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="livingCount">
          {46 - (TF.living ? TF.living.length : 0)}
        </S.TFCounter> */}
      </div>

      <div className="TFContainer">
        <S.TFTitle>Gender</S.TFTitle>
        <TextField
          id="filled-multiline-static"
          label=""
          rows={4}
          defaultValue={TF.gender ? TF.gender : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "gender")}
          key="genderTF"
          inputProps={{ maxLength: 58 }}
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
          defaultValue={TF.sex ? TF.sex : ""}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => handleTF(e, "sex")}
          key="sexTF"
          inputProps={{ maxLength: 58 }}
        />
        {/* <S.TFCounter key="sexCount">
          {46 - (TF.sex ? TF.sex.length : 0)}
        </S.TFCounter> */}
      </div>
    </div>
  );
};
