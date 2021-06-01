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

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: "Montserrat", sans-serif;
`;
S.Photo = styled.img`
  height: 577.25px;
  width: 100%;
  object-fit: cover;
`;
S.UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4px;
  border-bottom: 1px solid #e8e8e8;
`;
S.NameAge = styled.div`
  display: flex;
  align-items: baseline;
  /* vertical-align: baseline; */
  /* justify-content: baseline; */
  & > h1 {
    padding: 15px;
    padding-right: 5px;
  }
  & > h2 {
    font-weight: 500;
    padding: 5px;
    font-size: 26px;
  }
`;
S.VerifiedIcon = styled.svg`
  width: 34px;
  height: 34px;
  align-self: center;
  /* border: 1px red solid; */
`;
S.OtherDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 15px;
  & > p {
    padding: 4px;
    color: #5c5c5c;
    /* font-weight: bold; */
  }
  & > svg {
  }
`;
S.Bio = styled.p`
  padding: 12px;
  color: #5c5c5c;
  border-bottom: 1px solid #e8e8e8;
  white-space: pre-wrap;
  padding: 15px;
`;
S.PassionsField = styled.div`
  padding: 15px;
  & > h3 {
    font-weight: 500;
  }
`;
S.PassionsContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
S.Passion = styled.div`
  color: #fd5068;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 80px;
  margin: 4px;
  border: 1px #fd5068 solid;
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
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    ],
  });
  return (
    <S.Container>
      <S.Photo src={TF.images[0]} />
      <S.UserDetails>
        <S.NameAge>
          <h1>Taisha</h1>
          <h2>19</h2>
          <S.VerifiedIcon
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <g>
              <path
                d="M3.206 8.732l-.562.308a1.24 1.24 0 00-.615.814c-.077.345 0 .705.211.991l.382.507a1.204 1.204 0 010 1.431l-.382.528c-.427.595-.224 1.453.427 1.783l.562.309c.471.242.741.77.651 1.276l-.112.617c-.063.35.032.708.26.983.23.274.568.438.93.448l.65.022c.54.022 1.012.375 1.146.881l.18.617c.203.703 1.012 1.078 1.707.792l.607-.242a1.296 1.296 0 011.438.308l.426.485c.241.265.587.414.949.41.361-.004.703-.162.938-.432l.427-.485a1.27 1.27 0 011.414-.33l.607.242c.332.138.709.127 1.032-.03.323-.156.561-.442.652-.785l.179-.616a1.243 1.243 0 011.146-.903l.652-.044c.358-.024.69-.195.912-.472.223-.277.315-.634.254-.98l-.11-.617a1.233 1.233 0 01.628-1.299l.561-.308a1.24 1.24 0 00.616-.814c.077-.345 0-.706-.211-.992l-.382-.507a1.204 1.204 0 010-1.43l.382-.528c.426-.595.224-1.453-.427-1.785l-.562-.308a1.22 1.22 0 01-.651-1.276l.112-.617a1.203 1.203 0 00-.26-.983 1.254 1.254 0 00-.93-.448l-.651-.022a1.222 1.222 0 01-1.146-.88l-.18-.617c-.202-.705-1.01-1.078-1.706-.793l-.674.243a1.296 1.296 0 01-1.437-.308l-.427-.485a1.255 1.255 0 00-.942-.39 1.253 1.253 0 00-.923.434l-.426.484a1.27 1.27 0 01-1.415.33l-.606-.241a1.264 1.264 0 00-1.033.03 1.222 1.222 0 00-.652.784l-.18.617a1.243 1.243 0 01-1.144.902l-.652.043c-.36.024-.692.196-.914.473a1.228 1.228 0 00-.254.982l.112.616c.134.484-.112 1.013-.584 1.277z"
                fill="#2180e8"
              ></path>
              <path
                stroke="#2180e8"
                d="M16.902 8.38a1.296 1.296 0 00-.94-.38c-.34 0-.682.126-.916.38l-4.184 3.934-1.622-1.4a1.282 1.282 0 00-.917-.38c-.34 0-.682.126-.939.38-.255.252-.384.57-.384.908 0 .337.129.676.384.908l2.562 2.944c.255.252.575.379.916.379.342 0 .684-.127.918-.38l5.1-5.456c.256-.253.406-.592.406-.93 0-.336-.128-.675-.385-.908h.001z"
                fill="#fff"
              ></path>
            </g>
          </S.VerifiedIcon>
        </S.NameAge>
        <S.OtherDetails>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <g
              transform="translate(2 5)"
              stroke="#5c5c5c"
              stroke-width=".936"
              fill="none"
              fill-rule="evenodd"
            >
              <rect
                x="5.006"
                y="3.489"
                width="9.988"
                height="9.637"
                rx=".936"
              ></rect>
              <path d="M7.15 3.434h5.7V1.452a.728.728 0 0 0-.724-.732H7.874a.737.737 0 0 0-.725.732v1.982z"></path>
              <rect
                x=".72"
                y="3.489"
                width="18.56"
                height="9.637"
                rx=".936"
              ></rect>
            </g>
          </svg>
          <p>Professional eater </p>
        </S.OtherDetails>
        <S.OtherDetails>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path
              fill="#5c5c5c"
              stroke="#5c5c5c"
              stroke-width=".5"
              d="M11.87 5.026L2.186 9.242c-.25.116-.25.589 0 .705l.474.204v2.622a.78.78 0 0 0-.344.657c0 .42.313.767.69.767.378 0 .692-.348.692-.767a.78.78 0 0 0-.345-.657v-2.322l2.097.921a.42.42 0 0 0-.022.144v3.83c0 .45.27.801.626 1.101.358.302.842.572 1.428.804 1.172.46 2.755.776 4.516.776 1.763 0 3.346-.317 4.518-.777.586-.23 1.07-.501 1.428-.803.355-.3.626-.65.626-1.1v-3.83a.456.456 0 0 0-.022-.145l3.264-1.425c.25-.116.25-.59 0-.705L12.13 5.025c-.082-.046-.22-.017-.26 0v.001zm.13.767l8.743 3.804L12 13.392 3.257 9.599l8.742-3.806zm-5.88 5.865l5.75 2.502a.319.319 0 0 0 .26 0l5.75-2.502v3.687c0 .077-.087.262-.358.491-.372.29-.788.52-1.232.68-1.078.426-2.604.743-4.29.743s-3.212-.317-4.29-.742c-.444-.161-.86-.39-1.232-.68-.273-.23-.358-.415-.358-.492v-3.687z"
            ></path>
          </svg>
          <p>CUNY John Jay College of Criminal Justice</p>
        </S.OtherDetails>
        <S.OtherDetails>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <g
              stroke="#5c5c5c"
              stroke-width=".936"
              fill="none"
              fill-rule="evenodd"
            >
              <path d="M19.695 9.518H4.427V21.15h15.268V9.52zM3.109 9.482h17.933L12.06 3.709 3.11 9.482z"></path>
              <path d="M9.518 21.15h5.086v-6.632H9.518z"></path>
            </g>
          </svg>
          <p>Lives in New York</p>
        </S.OtherDetails>
        <S.OtherDetails>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M15.507 13.032c1.14-.952 1.862-2.656 1.862-5.592C17.37 4.436 14.9 2 11.855 2 8.81 2 6.34 4.436 6.34 7.44c0 3.07.786 4.8 2.02 5.726-2.586 1.768-5.054 4.62-4.18 6.204 1.88 3.406 14.28 3.606 15.726 0 .686-1.71-1.828-4.608-4.4-6.338"
              stroke="#5c5c5c"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Woman</p>
        </S.OtherDetails>
        <S.OtherDetails>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <g
              fill="#5c5c5c"
              stroke="#5c5c5c"
              stroke-width=".5"
              fill-rule="evenodd"
            >
              <path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path>
              <path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path>
            </g>
          </svg>
          <p>2 miles away</p>
        </S.OtherDetails>
      </S.UserDetails>
      <S.Bio>
        {`nyc loser who snorts when she laughs 
super duper shy 
don't be a dick :)`}
      </S.Bio>
      <S.PassionsField>
        <h3>Passions</h3>
        <S.PassionsContainer>
          <S.Passion>Photography</S.Passion>
          <S.Passion>Netflix</S.Passion>
          <S.Passion>Music</S.Passion>
          <S.Passion>Art</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
          <S.Passion>Fashion</S.Passion>
        </S.PassionsContainer>
      </S.PassionsField>
    </S.Container>
  );
};

{
  /* <div>
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
</div> */
}
