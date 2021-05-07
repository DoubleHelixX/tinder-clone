import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import nel from "../images/nel.png";

export const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Robert W",
      url:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    },
    {
      name: "Aiony Haust",
      url:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Nel",
      url: nel,
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
    width: 600px;
    max-width: 85vw;
    height: 50vh;
    max-height: 400px;
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
        <S.TinderCardSwipe>
          <TinderCard key={person.name} preventSwipe={["up", "down"]}>
            <S.TinderCard style={{ backgroundImage: `url(${person.url})` }}>
              <S.TinderCardName>{person.name}</S.TinderCardName>
            </S.TinderCard>
          </TinderCard>
        </S.TinderCardSwipe>
      ))}
    </S.TinderCardContainer>
  );
};
