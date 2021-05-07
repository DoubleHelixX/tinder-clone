import React from "react";
import styled from "styled-components/macro";
import Avatar from "@material-ui/core/Avatar";
import nel from "../images/nel.png";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

export const Chats = () => {
  const [people, setPeople] = useState([
    {
      firstName: "Nel",
      lastName: "",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
    },
    {
      firstName: "Aiony",
      lastName: "Haust",
      message: `yeah I'm avaiable tomorrow if you want to meet 😍`,
      url:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      timestamp: "2 days ago",
    },
    {
      firstName: "Robert",
      lastName: "W",
      message: `I can give you lots of moneys 😉`,
      url:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      timestamp: "1 week ago",
    },
  ]);

  const S = {};
  S.ChatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
    border-bottom: 1px solid #fafafa;
    a {
      text-decoration: none;
      color: inherit;
    }
  `;
  S.ChatImg = styled(Avatar)`
    margin-right: 20px;
  `;
  S.ChatDetails = styled.div`
    flex: 1;
  `;
  S.ChatName = styled.h2``;
  S.ChatMessage = styled.p`
    color: gray;
    text-decoration: none;
  `;
  S.ChatTimestamp = styled.p`
    color: lightgray;
  `;

  return (
    <div>
      {people.map((person) => (
        <S.ChatContainer key={`${person.firstName}-chatContainer`}>
          <S.ChatImg
            alt={`${person.firstName} ${person.lastName}`}
            src={person.url}
            key={`${person.firstName}-chatImg`}
          >
            {`${person.firstName.charAt(0)} ${person.lastName.charAt(0)}`}
          </S.ChatImg>
          <S.ChatDetails key={`${person.firstName}-chatDetails`}>
            <Link to={`chats/${person.firstName + person.lastName}`}>
              <S.ChatName key={`${person.firstName}-chatName`}>
                {`${person.firstName} ${person.lastName}`}
              </S.ChatName>
              <S.ChatMessage key={`${person.firstName}-chatMessage`}>
                {person.message}
              </S.ChatMessage>
            </Link>
          </S.ChatDetails>
          <S.ChatTimestamp key={`${person.firstName}-chatTimestamp`}>
            {person.timestamp}
          </S.ChatTimestamp>
        </S.ChatContainer>
      ))}
    </div>
  );
};
