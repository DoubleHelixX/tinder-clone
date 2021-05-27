import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components/macro";
import IconButton from "@material-ui/core/IconButton";

import nel from "../images/nel.png";

export const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      firstName: "Nel",
      lastName: "",
      message: "Hey cutie ! how is your day going? 😃",
      url: nel,
      timestamp: "32 minutes ago",
      age: "32",
      passions: "Fishing, Bending Over, Foodie, Country Music",
      about: `I’m a princess only at night ;)`,
    },
    {
      firstName: "Aiony",
      lastName: "Haust",
      message: `yeah I'm avaiable tomorrow if you want to meet 😍`,
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      timestamp: "2 days ago",
      age: "26",
      passions: "biking, Yoga, Fashion",
      about: `I’m a princess, I’m also a Scorpio   
      insta: itziardeclavijo`,
    },
    {
      firstName: "Robert",
      lastName: "W",
      message: `I can give you lots of moneys 😉`,
      url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      timestamp: "1 week ago",
      age: "46",
      passions: "gym, biking,bussiness, investing, traveling, foodie",
      about: `I’m a princess, I’m also a Scorpio   
      insta: itziardeclavijo`,
    },
  ]);

  //   useEffect(() => {
  //     dispatch(handleInitialData());
  //   }, [dispatch]);

  const S = {};
  S.TinderCardContainer = styled.div`
    display: flex;
    justify-content: center;
    height: calc(70vh + 40px);
    width: 85vw;
    min-height: calc(397.792px + 40px);
    padding: 0;
    margin-bottom: 40px;
    /* border: 2px blue solid; */
  `;

  S.TinderCard = styled.div`
    position: relative;
    margin: auto;
    width: auto;
    max-width: auto;
    min-width: 85vw;
    height: 70vh;
    min-height: calc(397.792px + 60px);
    /* max-height: 80vh; */
    padding: 20px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.1);
    /* border: 2px red solid; */
  `;
  S.TinderCardSwipe = styled.div`
    position: absolute;
  `;
  S.UserDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 30px;
    left: 10px;
    width: 100%;
    /* border: red solid 2px; */
  `;
  S.UserDetails = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: 5px;
  `;
  S.UserName = styled.h1`
    color: white;
  `;
  S.UserAge = styled.h2`
    color: white;
    padding-left: 12px;
    font-weight: 500;
  `;
  S.UserPassions = styled.div`
    color: white;
  `;
  S.PassionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    align-items: baseline;
    width: 95%;
    height: auto;
    /* border: red solid 2px; */
  `;

  S.PassionContainer = styled.div`
    color: white;
    border-radius: 100px;
    border: 1px solid transparent;
    width: auto;
    height: 18px;
    margin: 8px 2px;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 27%);

    background: ${(props) =>
      props.background
        ? props.background
        : "linear-gradient(90deg, #ff7854, #fd267d)"};

    width: fit-content;
    padding: 4px;
    margin-right: 8px;

    /* display: inline-block; */
  `;

  S.Passion = styled.p`
    color: #ffffff;
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
    padding: 1px 10px;
    text-align: center;
    font-weight: bolder;
    width: auto;
    min-width: 10px;
  `;
  S.About = styled.p`
    color: white;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    margin-left: 5px;
    width: 93%;
    white-space: pre-wrap;
    /* border: 2px red solid; */
  `;

  return (
    <S.TinderCardContainer>
      {people.map(
        (person) =>
          person.firstName !== "Robert" && (
            <S.TinderCardSwipe key={`${person.firstName}-tinderCardSwipe`}>
              <TinderCard
                key={`${person.firstName}-tinderCard`}
                preventSwipe={["up", "down"]}
              >
                <S.TinderCard
                  style={{ backgroundImage: `url(${person.url})` }}
                  key={`${person.firstName}-TinderCardDiv`}
                >
                  <S.UserDataContainer key={`${person.firstName}-UserDetails>`}>
                    <S.UserDetails>
                      <S.UserName>{person.firstName}</S.UserName>
                      <S.UserAge>{person.age}</S.UserAge>
                    </S.UserDetails>
                    <S.PassionsContainer>
                      {person.passions
                        .trim()
                        .split(",")
                        .map(
                          (p, idx) =>
                            idx !== 10 &&
                            (people[2].passions
                              .toLowerCase()
                              .search(p.toLowerCase()) !== -1 ? (
                              <S.PassionContainer
                                key={`${person.firstName}-passion-${idx}`}
                              >
                                <S.Passion>{p}</S.Passion>
                              </S.PassionContainer>
                            ) : (
                              <S.PassionContainer
                                background="rgba(0,0,0,.3)"
                                key={`${person.firstName}-passion-${idx}`}
                              >
                                <S.Passion>{p}</S.Passion>
                              </S.PassionContainer>
                            ))
                        )}
                    </S.PassionsContainer>
                    <S.About>{person.about.substring(0, 84)}...</S.About>
                  </S.UserDataContainer>
                  ;
                </S.TinderCard>
              </TinderCard>
            </S.TinderCardSwipe>
          )
      )}
    </S.TinderCardContainer>
  );
};
