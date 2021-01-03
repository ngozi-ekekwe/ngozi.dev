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
                  <div>
                    <h1>{experience.role}</h1>
                    <h2>{experience.company}</h2>
                    <small>{experience.timeLine}</small>
                    <p>{experience.description}</p>
                  </div>
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
  margin: 3rem 0;
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);
`;

const ExperienceWrapper = styled.section`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
`;

const ExperienceLayout = styled.div`
  display: flex;
  overflow: hidden;
  padding: 2rem 0;
  height: 100%;
  width: 100%;
`;

const SingleExperience = styled.div`
  width: 0%;
  height: 300px;
  background-color: #fafafa;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.75s ease;

  &.active {
    width: 85%;
    margin: 0 auto;
    opacity: 1;
    transform: translateX(0);
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
