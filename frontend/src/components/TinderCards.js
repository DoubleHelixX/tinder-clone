import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components/macro";

import nel from "../images/nel.png";

export const TinderCards = () => {
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

  //   useEffect(() => {
  //     dispatch(handleInitialData());
  //   }, [dispatch]);

  const S = {};
  S.TinderCardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
  `;

  S.TinderCard = styled.div`
    position: relative;
    margin: auto;
    width: auto;
    max-width: auto;
    min-width: 85vw;
    height: auto;
    min-height: 50vh;
    max-height: auto;
    padding: 20px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  `;
  S.TinderCardSwipe = styled.div`
    position: absolute;
  `;

  S.TinderCardName = styled.h3`
    position: absolute;
    bottom: 10px;
    color: white;
  `;

  return (
    <S.TinderCardContainer>
      {people.map((person) => (
        <S.TinderCardSwipe key={`${person.firstName}-tinderCardSwipe`}>
          <TinderCard
            key={`${person.firstName}-tinderCard`}
            preventSwipe={["up", "down"]}
          >
            <S.TinderCard
              style={{ backgroundImage: `url(${person.url})` }}
              key={`${person.firstName}-TinderCardDiv`}
            >
              <S.TinderCardName key={`${person.firstName}-TinderCardName`}>
                {`${person.firstName} ${person.lastName}`}
              </S.TinderCardName>
            </S.TinderCard>
          </TinderCard>
        </S.TinderCardSwipe>
      ))}
    </S.TinderCardContainer>
  );
};
