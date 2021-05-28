import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const S = {};
S.Slideshow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 2px blue solid; */
`;
S.SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  /* border: 2px green solid; */
`;
S.Slide = styled.div`
  display: inline-block;

  height: auto;
  width: 100%;
  border-radius: 40px;
  border: 2px inherit solid;
`;
S.SlideshowDots = styled.div`
  text-align: center;
  width: inherit;
  border: 2px inherit solid;
  /* margin-right: 38px; */
`;
S.SlideshowDot = styled.div`
  display: ${(props) => (props.display ? props.display : "inline-block")};
  height: 8px;
  width: 8px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 3px 0px;

  background-color: #c4c4c4;
`;

S.SlideshowDotActive = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 3px 0px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#000000"};
`;
S.AdContainer = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  position: relative;
  align-items: center;
  width: 100%;
  flex-direction: center;
  /* border: 2px red solid; */
  font-weight: 500;
`;
S.AdTitleContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  /* border: 2px purple solid; */
`;
S.AdLogo = styled.svg`
  height: 26px;
  width: 28px;
  object-fit: contain;
  padding-right: 8px;
  padding-bottom: ${(props) => props.paddingBottom};

  /* border: red 2px solid; */

  & > path {
    fill: ${(props) =>
      props.index === 0 ? 'url("#gradient")!important ' : ""};
    fill-rule: "nonzero";
  }
`;

S.AdTitle = styled.h3`
  font-family: Arial, sans-serif;
  color: #1f1f1f;
  padding: 0;
  margin: 0;
  /* border: red 2px solid; */
`;
S.AdDescription = styled.p`
  color: #1f1f1f;
`;

export const SlideshowAds = () => {
  const [ads, setAds] = useState([
    {
      title: "Tinder Platinum™",
      description: "Level up every action you take on Tinder",
      color: "#1f1f1f",
      path: "M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z",
    },
    {
      title: "See Who Likes You",
      description: "Match with them instantly",
      color: "#E49D30",
      path: "M2.16 7.354h6.37a5.947 5.947 0 00-.894 2.084H2.16c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.341.61-.532 1.015-.491v.01zm1.68 6.263c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.34.61-.531 1.015-.49h3.796c.077.375.186.751.35 1.106l.021.043.022.043.546.902H3.84zm2.476 4.18c-.59 0-1.069-.472-1.069-1.053 0-.582.479-1.053 1.07-1.053h3.49l1.266 2.106H6.316zm13.746-1.837l-6.36 2.89a.495.495 0 01-.611-.183l-3.971-6.5a4.132 4.132 0 01-.185-3.02C9.556 7.183 11.127 6 12.949 6c.404 0 .818.064 1.233.183 1.222.365 1.745.999 2.476 2.299a5.271 5.271 0 012.346-.73c.327 0 .665.064 1.047.171 2.29.677 3.382 2.901 2.618 5.297a4.287 4.287 0 01-1.909 2.396l-.153.086-.152.075-.393.183z",
    },

    {
      title: "Like Profiles Around the World",
      description: "Passport™ To Any Location",
      color: "#1E4AAC",
      path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
    },
    {
      title: "Control Your Profile",
      description: "Limit what others see about you",
      color1: "#FF7B2F",
      color2: "#ffffff",
      path1:
        "M7.187 7A5.242 5.242 0 0 0 2 12.244a5.248 5.248 0 0 0 5.244 5.245h9.512A5.243 5.243 0 0 0 22 12.244 5.24 5.24 0 0 0 16.822 7H7.187z",
      path2: "M20.4 12.182a3.809 3.809 0 1 1-7.613 0 3.809 3.809 0 1 1 7.617 0",
    },
    {
      title: "Unlimited Rewinds",
      description: "Go back and try again!",
      color: "#FFB103",
      path: "M12.119 4.599V3.307c0-1.216-.76-1.672-1.824-.988l-.608.304L6.04 5.13l-.456.304c-1.064.76-1.064 1.748 0 2.28l.38.38c.987.76 2.66 1.824 3.647 2.432l.532.304c.912.76 1.748.228 1.748-.912V8.246a5.125 5.125 0 0 1 5.167 5.167c0 2.888-2.28 5.092-5.167 5.092-3.04 0-5.32-2.28-5.32-5.168 0-.912-.76-1.671-1.747-1.671-1.064 0-1.824.76-1.824 1.671C3 18.125 6.951 22 11.815 22c4.787 0 8.738-3.8 8.738-8.663.076-4.711-3.875-8.51-8.662-8.51l.228-.228z",
    },
    {
      title: "Unlimited Likes",
      description: "Send as many Likes as you want.",
      color: "#0DE194",
      path: "M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09",
    },
  ]);

  const delay = 1800;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (index < 5) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) => {
            if (prevIndex === ads.length - 1) {
              return 0;
            }
            return prevIndex + 1;
          }),
        delay
      );
    } else setTimeout(() => setIndex(6), delay);

    return () => {
      console.log("index", index);
      resetTimeout();
    };
  }, [index]);
  return (
    <S.Slideshow>
      <S.SlideshowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {ads.map((ad, idx) => (
          <S.Slide key={idx}>
            <S.AdContainer>
              <S.AdTitleContents>
                <S.AdLogo
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  paddingBottom={idx === 3 ? "0px" : "5px"}
                  index={idx}
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="10%"
                      y1="90%"
                      x2="60%"
                      y2="40%"
                    >
                      <stop offset="15%" stop-color="#616161" />
                      <stop offset="95%" stop-color="#1f1f1f" />
                    </linearGradient>
                  </defs>
                  {ad.path1 ? (
                    <g fill="none">
                      <path fill={ad.color1} d={ad.path1}></path>
                      <path fill={ad.color2} d={ad.path2}></path>
                    </g>
                  ) : (
                    <path fill={ad.color} d={ad.path}></path>
                  )}
                </S.AdLogo>
                <S.AdTitle>{ad.title}</S.AdTitle>
              </S.AdTitleContents>
              <S.AdDescription>{ad.description}</S.AdDescription>
            </S.AdContainer>
          </S.Slide>
        ))}
        {index === 6 && (
          <S.Slide key={0}>
            <S.AdContainer>
              <S.AdTitleContents>
                <S.AdLogo
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  paddingBottom="5px"
                  index={0}
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="10%"
                      y1="90%"
                      x2="60%"
                      y2="40%"
                    >
                      <stop offset="15%" stop-color="#616161" />
                      <stop offset="95%" stop-color="#1f1f1f" />
                    </linearGradient>
                  </defs>

                  <path fill={ads[0].color} d={ads[0].path}></path>
                </S.AdLogo>
                <S.AdTitle>{ads[0].title}</S.AdTitle>
              </S.AdTitleContents>
              <S.AdDescription>{ads[0].description}</S.AdDescription>
            </S.AdContainer>
          </S.Slide>
        )}
      </S.SlideshowSlider>

      <S.SlideshowDots>
        {index === 6 && (
          <S.SlideshowDotActive
            key={0}
            backgroundColor={ads[0].color ? ads[0].color : ads[0].color1}
            onClick={() => {
              setIndex(0);
            }}
          ></S.SlideshowDotActive>
        )}
        {ads.map((ad, idx) =>
          index === idx ? (
            <S.SlideshowDotActive
              key={idx}
              backgroundColor={ad.color ? ad.color : ad.color1}
              onClick={() => {
                setIndex(index === 6 ? idx - 1 : idx);
              }}
            ></S.SlideshowDotActive>
          ) : (
            <S.SlideshowDot
              key={idx}
              display={index === 6 && idx === 5 ? "none" : ""}
              onClick={() => {
                setIndex(index === 6 ? idx + 1 : idx);
              }}
            ></S.SlideshowDot>
          )
        )}
      </S.SlideshowDots>
    </S.Slideshow>
  );
};
