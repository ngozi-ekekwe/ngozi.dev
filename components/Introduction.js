import styled, { keyframes } from "styled-components";
import React, { useEffect, useRef, useState } from "react";

function Introduction() {
  const [logoHeight, setLogoHeight] = useState(250);
  const profileRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY,
      minHeight = 0,
      logoHeight = Math.max(minHeight, 250 - scrollTop);
    if (logoHeight === 0) {
      profileRef.current.style.border = "none";
    } else {
      profileRef.current.style.border = "3px solid #fa6400";
    }
    setLogoHeight(logoHeight);
  };
  return (
    <div>
      <StyledIntroduction>
        <Name>Ngozi Ekekwe</Name>
        <DescriptionWrapper>
          <Description>
            I’m a Front-End Developer currently living and working in Berlin. I
            am passionate about building products that are accessible,
            responsive, highly performant, and aesthetically pleasing to use.
          </Description>
          <SkillWrapper>
            <img src="/svgs/reactlogo.svg" alt="next" />
            <img src="/svgs/next.svg" alt="next" />
            <img src="/svgs/typescript.svg" alt="next" />
            <img src="/svgs/css.svg" alt="next" />
            <img src="/svgs/html.svg" alt="next" />
            <img src="/svgs/nodejs.svg" alt="next" />
          </SkillWrapper>
        </DescriptionWrapper>
      </StyledIntroduction>
      <ProfileStyled height={logoHeight}>
        <Avatar id="profile" ref={profileRef}></Avatar>
      </ProfileStyled>
    </div>
  );
}

const Scale = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
 `;

const Linear = keyframes`
 from {
   height: 0;
 }
 to {
   height: 50%;
 }
  `;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img + img {
    margin-left: 1rem;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

const StyledIntroduction = styled.div`
  position: relative;
  width: 100%;
  background-image: ${(props) => props.theme.defaultColor};
  height: 70vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    padding: 3rem 0;
    height: 100%;
  }
`;

const Name = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme.bodyColor};
  position: relative;
  z-index: 1;

  &::after {
    background-color: #fa6400;
    bottom: 0;
    content: " ";
    display: block;
    transition: 2s linear height;
    height: 50%;
    left: 7px;
    opacity: 0.5;
    position: absolute;
    width: calc(100%);
    animation-name: ${Linear};
    animation-duration: 0.65s;
    z-index: -1;
  }

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
  }
`;

const DescriptionWrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    padding: 1rem 0rem 3rem;
    width: 80%;
  }
`;

const Description = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.bodyColor};
  font-size: 1.5rem;
  line-height: 2.17;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.1rem;
  }
`;

const ProfileStyled = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  transition: all 0.75s ease;
  border-radius: 50%;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: -100px;
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-top: -50px;
    height: 150px;
    width: 150px;
  }
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #fa6400;
  z-index: 2;
  background-image: url("/avatar3.jpg");
  background-position: top;
  background-size: cover;
`;

export default Introduction;
