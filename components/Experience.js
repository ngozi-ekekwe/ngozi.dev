import React, { useState } from "react";
import styled from "styled-components";
import { experienceDirectory } from "../utils/experiences";

function Experiences() {
  const workExperience = experienceDirectory;
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <ExperiencesStyled>
      <ExperienceWrapper>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceLayout>
          {experienceDirectory &&
            experienceDirectory.map((experience, index) => {
              return (
                <SingleExperience
                  className={carouselIndex === index ? "active" : ""}
                >
                  <SingleExperienceWrapper>
                    <h1>{experience.role}</h1>
                    <h2>{experience.company}</h2>
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

const ExperiencesStyled = styled.section`
  width: 100%;
  background-image: ${(props) => props.theme.defaultColor};
`;

const ExperienceWrapper = styled.section`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
`;

const ExperienceLayout = styled.div`
  height: 100%;
  width: 100%;
`;

const SingleExperience = styled.div`
  width: 100%;
  display: none;
  min-height: 300px;
  background-color: ${(props) => props.theme.experienceCard};
  border-radius: 5px;
  justify-content: center;
  padding: 1rem 1.5rem;
  transform: translateX(-150%);
  transition: width 0.75s ease;

  &.active {
    display: flex;
    transform: translateX(0);
    transition: width 0.75s ease;
  }
`;

const SingleExperienceWrapper = styled.div`
  h1 {
    font-size: 1.6rem;
    margin-bottom: 0;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      font-size: 1.2rem;
    }
  };

  h2 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
    color: #64707d;
  }

  small {
    font-size: 0.9rem;
  }

  p {
    line-height: 1.7;
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
