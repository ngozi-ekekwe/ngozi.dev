import { projectsDirectory } from "../utils/projects";
import styled, { keyframes } from "styled-components";

function Projects() {
  return (
    <ProjectDiv>
      <ProjectsStyled>
        <SectionTitle>Selected Projects</SectionTitle>
        <ProjectWrapper>
          {projectsDirectory &&
            projectsDirectory.map((project) => {
              return (
                <Project>
                  <ProjectImage>
                    <img src={project.backgroundImage} alt="" />
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectHeader>{project.name}</ProjectHeader>
                    <ShortDescription>{project.short}</ShortDescription>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTagWrapper>
                      {project.tags &&
                        project.tags.map((tag) => {
                          return <ProjectHashTag>{tag}</ProjectHashTag>;
                        })}
                    </ProjectTagWrapper>
                    <ProjectTagWrapper>
                      {project.tools &&
                        project.tools.map((tools) => {
                          return (
                            <ProjectTag
                              src={`/svgs/${tools}.svg`}
                              alt={tools}
                            />
                          );
                        })}
                    </ProjectTagWrapper>
                  </ProjectContent>
                  <ProjectFooter>
                    {project.github && (
                      <ProjectLink href={project.github}>
                        source sode
                      </ProjectLink>
                    )}
                    {project.live && (
                      <ProjectLink href={project.live}>live site</ProjectLink>
                    )}
                  </ProjectFooter>
                </Project>
              );
            })}
        </ProjectWrapper>
      </ProjectsStyled>
    </ProjectDiv>
  );
}

const ProjectDiv = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.headerBackgroundColor};
`;

const ProjectsStyled = styled.article`
  width: 80%;
  margin: 0rem auto;
  padding-top: 140px;
  padding-bottom: 3rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    padding-top: 140px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  color: ${(props) => props.theme.bodyTextColor};

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    padding: 1.5rem 1rem;
  }
`;

const ProjectHashTag = styled.span`
  color: #64707d;
  font-size: 1rem;
  & + & {
    padding-left: 1rem;
  }
`;

const ProjectImage = styled.figure`
  margin: 1rem;
  img {
    object-fit: cover;
    display: flex;
    height: 195px;
    width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`;

const Slide = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
 `;

const ProjectWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-top: 2rem;
  }
`;

const ProjectHeader = styled.header`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size1 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  line-height: 1.7;
  color: #64707d;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`;

const ShortDescription = styled.p`
  display: none;
  color: #64707d;
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: block;
    color: #64707d;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
  }
`;

const Project = styled.div`
  width: calc((100% - (10px * 5)) / 3);
  position: relative;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  &:hover {
    scaleY(2);
  }

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-bottom: 1rem;
  }
  animation-name: ${Slide};
  animation-duration: 0.75s;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    width: 100%;
    height: 250px;
  }
`;

export const ProjectTagWrapper = styled.div`
  margin-bottom: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
`;

export const ProjectTag = styled.img`
  margin-right: 0.5rem;
}
`;

const ProjectFooter = styled.footer`
  diplsay: flex;
  padding: 1.5rem 2rem;
  position: absolute;
  bottom: 1em;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    bottom: 1rem;
  }
`;

const ProjectLink = styled.a`
  margin-right: 1rem;
  font-size: 1.2rem;
  position: relative;
  z-index: 1;

  &::after {
    background-image: ${(props) => props.theme.defaultColor};
    bottom: 0;
    content: " ";
    display: block;
    height: 50%;
    left: 7px;
    position: absolute;
    transform: scaleY(1);
    transform-origin: bottom center;
    transition: transform 0.3s;
    width: calc(100%);
    z-index: -1;
  }

  &:hover::after {
    transform: scaleY(2);
    background-color: #fa6400;
  }
`;

export default Projects;
