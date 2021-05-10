import React from "react";
import styled from "styled-components/macro";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import nel from "../images/nel.png";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { useSelector, useDispatch } from "react-redux";

export const Chats = () => {
  const [people, setPeople] = useState([
    {
      firstName: "Nel",
      lastName: "",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
      status: "online",
    },
    {
      firstName: "Aiony",
      lastName: "Haust",
      message: `yeah I'm avaiable tomorrow if you want to meet 😍`,
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      timestamp: "2 days ago",
      status: "offline",
    },
    {
      firstName: "Robert",
      lastName: "W",
      message: `I can give you lots of moneys 😉`,
      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      timestamp: "1 week ago",
      status: "online",
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
    margin-right: 0px;
  `;
  S.ChatDetails = styled.div`
    flex: 1;
    margin-left: 20px;
  `;
  S.ChatName = styled.h2``;
  S.ChatMessage = styled.p`
    color: gray;
    text-decoration: none;
  `;
  S.ChatTimestamp = styled.p`
    color: lightgray;
  `;

  const OnlineBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -1,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        animationDuration: "3s",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);

  const IdleBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#F1C232",
      color: "#F1C232",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -1,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        animationDuration: "3s",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }))(Badge);

  const OfflineBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#CC0000",
      color: "#CC0000",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -1,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        animationDuration: "3s",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }))(Badge);

  return (
    <div>
      {people.map((person) => (
        <S.ChatContainer key={`${person.firstName}-chatContainer`}>
          {person.status === "online" ? (
            <OnlineBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <S.ChatImg
                alt={`${person.firstName} ${person.lastName}`}
                src={person.url}
                key={`${person.firstName}-chatImg`}
              >
                {`${person.firstName.charAt(0)} ${person.lastName.charAt(0)}`}
              </S.ChatImg>
            </OnlineBadge>
          ) : (
            <OfflineBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <S.ChatImg
                alt={`${person.firstName} ${person.lastName}`}
                src={person.url}
                key={`${person.firstName}-chatImg`}
              >
                {`${person.firstName.charAt(0)} ${person.lastName.charAt(0)}`}
              </S.ChatImg>
            </OfflineBadge>
          )}

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
