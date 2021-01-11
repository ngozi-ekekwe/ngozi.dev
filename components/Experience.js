import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { experienceDirectory } from "utils/experiences";
import {
  EXPERIENCE_TEXT
} from "../utils/constants";

function Experiences() {
  const workExperience = experienceDirectory;
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <ExperiencesStyled>
      <ExperienceWrapper>
        <SectionTitle>{EXPERIENCE_TEXT}</SectionTitle>
        <ExperienceLayout>
          {experienceDirectory &&
            experienceDirectory.map((experience, index) => {
              return (
                <SingleExperience
                  key={index}
                  className={carouselIndex === index ? "active" : ""}
                >
                  <SingleExperienceWrapper>
                    <h1>{experience.company}</h1>
                    <h2>{experience.role}</h2>
                    <small>{experience.timeLine}</small>
                    <p>{experience.description}</p>
                  </SingleExperienceWrapper>
                </SingleExperience>
              );
            })}
        </ExperienceLayout>
        <NavCircleWrapper>
          {workExperience &&
            workExperience.map((_, index) => {
              return (
                <NavCircle
                  key={index}
                  className={carouselIndex === index ? "active" : ""}
                  onClick={() => setCarouselIndex(index)}
                ></NavCircle>
              );
            })}
        </NavCircleWrapper>
      </ExperienceWrapper>
    </ExperiencesStyled>
  );
}

const Slide = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
 `;

const ExperiencesStyled = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-image: ${(props) => props.theme.defaultColor};
`;

const ExperienceWrapper = styled.div`
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
  overflow: hidden;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
`;

const SingleExperience = styled.div`
  width: 100%;
  display: none;
  min-height: 300px;
  background-color: ${(props) => props.theme.experienceCard};
  border-radius: 5px;
  justify-content: center;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);
  transition: width 0.75s ease;

  &.active {
    animation-name: ${Slide};
    animation-duration: 0.75s;
    display: flex;
  }
`;

const ExperienceLayout = styled.div`
  height: 100%;
  width: 100%;
`;

const SingleExperienceWrapper = styled.div`
  h1 {
    font-size: 1.6rem;
    margin-bottom: 0;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-size: 1rem;
    margin-top: 0.9rem;
    margin-bottom: 0.3rem;
    color: #64707d;
  }

  small {
    font-size: 0.9rem;
  }

  p {
    line-height: 1.7;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 2rem 0;
  }
`;

const NavCircleWrapper = styled.ul`
  display: flex;
  padding: 2rem 0;
  align-item: center;
  justify-content: center;
`;

const NavCircle = styled.li`
  height: 20px;
  width: 20px;
  cursor: pointer;
  list-style: none;
  margin-right: 2rem;
  border: 1px solid #fa6400;
  border-radius: 50%;

  &.active,
  &:hover {
    border: 3px solid #fa6400;
  }
`;

export default Experiences;
