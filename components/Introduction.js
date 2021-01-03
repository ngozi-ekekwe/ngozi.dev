import styled from "styled-components";
import React, { useEffect, useState } from "react";

function Introduction() {

  const [logoHeight, setLogoHeight] = useState(250);

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
    setLogoHeight(logoHeight);

  };
  return (
    <div>
      <StyledIntroduction>
        <Name>Hello World!</Name>
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

const StyledIntroduction = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 3.5rem;
`;

const DescriptionWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Role = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.17;
`;

const ProfileStyled = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  transition: all .5s ease;
  border-radius: 50%;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: -100px;
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 2;
  background-image: url("/avatar.jpg");
  background-position: center;
  background-size: cover;
`;

export default Introduction;
