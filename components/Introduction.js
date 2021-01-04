import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";

function Introduction() {
  const [logoHeight, setLogoHeight] = useState(200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY,
      minHeight = 0,
      logoHeight = Math.max(minHeight, 200 - scrollTop);
    setLogoHeight(logoHeight);
  };
  return (
    <div>
      <StyledIntroduction>
        <Name>Ngozi Ekekwe</Name>
        <DescriptionWrapper>
          <Description>
            I’m a Front-End Developer working on Account Switch Kit, a solution
            that provides a fully digital workflow that allows users to switch
            their bank accounts and portfolios from one bank to another within
            minutes at Finleap Connect
          </Description>
        </DescriptionWrapper>
      </StyledIntroduction>
      <ProfileStyled height={logoHeight}>
        <Avatar id="profile"></Avatar>
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

const StyledIntroduction = styled.div`
  position: relative;

  width: 100%;
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);
  height: 55vh;
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
  position: relative;
  z-index: 1;

  &::after {
    background-color: #fa6400;
    bottom: 0;
    content: " ";
    display: block;
    height: 50%;
    left: 7px;
    opacity: 0.5;
    position: absolute;
    transition: all 0.15s ease-in-out;
    width: calc(100%);
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
    width: 80%;
  }
`;

const Role = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.17;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.1rem;
  }
`;

const ProfileStyled = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  transition: all 0.5s ease;
  border-radius: 50%;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: -100px;
  animation-name: ${Scale};
  animation-duration: 0.75s;
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
