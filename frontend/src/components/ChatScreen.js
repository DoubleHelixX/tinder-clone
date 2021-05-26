import React, { useState } from "react";
import styled from "styled-components/macro";
import Avatar from "@material-ui/core/Avatar";
import nel from "../images/nel.png";
import { useParams } from "react-router-dom";

export const Chatscreen = () => {
  const [messages, setMessages] = useState([
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey ? ❣️",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "How was your weekend?",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      message: "leave me alone.",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey ? ❣️",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "How was your weekend?",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      message: "leave me alone.",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "How was your weekend?",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      message: "leave me alone.",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "Hey ? ❣️",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Nel",
      lastName: " ",
      message: "How was your week?",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      message: "leave me aaa.",
    },
  ]);

  const S = {};
  S.ChatScreenContainer = styled.div`
    overflow: auto;
    height: calc(100vh - 90px);
    /* border: 2px red solid; */
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
  S.MatchedTimestamp = styled.p`
    text-align: center;
    padding: 20px;
    color: gray;
  `;
  S.MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    max-height: 75%;
    &:last-child {
      margin-bottom: 20px;
    }
  `;
  S.Message = styled.p`
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
  `;
  S.MessageUser = styled.p`
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
  `;
  S.MessageImg = styled(Avatar)`
    margin-right: 20px;
  `;
  S.FormContainer = styled.div`
    border: none;
    display: block;
    overflow: hidden;
  `;

  S.Form = styled.form`
    display: flex;
    padding: 5px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    border-top: 1px solid lightgray;
    background-color: white;
    overflow: hidden;
  `;
  S.FormInput = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    /* outline: none; */
    outline-color: #29b3cd;
    outline-style: groove 2px;
    -moz-outline-radius: 20px;
    overflow: hidden;
  `;
  S.FormButton = styled.button.attrs((props) => ({
    type: props.type || "button",
  }))`
    border: none;
    margin-right: 20px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
  `;

  const { person = "" } = useParams();

  const handleSend = (e) => {
    e.preventDefault();
    console.log("here", e.target[0].value);
    setMessages([...messages, { message: e.target[0].value }]);
  };

  return (
    <div>
      <S.ChatScreenContainer>
        <S.MatchedTimestamp>
          {`You matched with ${person} on ${messages[0].timestamp}`}
        </S.MatchedTimestamp>
        {messages.map((message) =>
          message.firstName || message.lastName ? (
            <S.MessageContainer key={`${message.firstName}-container`}>
              <S.MessageImg
                alt={`${message.firstName} ${message.lastName}`}
                src={message.url}
                key={`${message.firstName}-img`}
              >
                {`${message.firstName.charAt(0)} ${message.lastName.charAt(0)}`}
              </S.MessageImg>

              <S.Message key={`${message.firstName}-message`}>
                {message.message}
              </S.Message>
            </S.MessageContainer>
          ) : (
            <S.MessageContainer key={`${message.lastName}-container`}>
              <S.MessageUser key={`${message.lastName}-message`}>
                {message.message}
              </S.MessageUser>
            </S.MessageContainer>
          )
        )}
      </S.ChatScreenContainer>
      <S.FormContainer>
        <S.Form onSubmit={handleSend}>
          <S.FormInput type="text" placeholder="send a message . . ." />
          <S.FormButton type="submit">Send</S.FormButton>
        </S.Form>
      </S.FormContainer>
    </div>
  );
};
