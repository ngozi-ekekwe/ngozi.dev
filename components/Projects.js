import { projectsDirectory } from "../utils/projects";
import styled, { keyframes } from "styled-components";

function Projects() {
  return (
    <ProjectDiv>
      <ProjectsStyled>
        <SectionTitle>Selected Projects</SectionTitle>
        <ProjectWrapper>
          {projectsDirectory &&
            projectsDirectory.map((project, index) => {
              return (
                <Project className={project.block ? "flex" : ""} key={index}>
                  {project.block && <ProjectImage>
                    <img src={project.backgroundImage} alt="" />
                  </ProjectImage>}
                  <ProjectContent>
                    <ProjectHeader>{project.name}</ProjectHeader>
                    <ShortDescription>{project.short}</ShortDescription>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTagWrapper>
                      {project.tags &&
                        project.tags.map((tag, index) => {
                          return <ProjectHashTag key={index}>{tag}</ProjectHashTag>;
                        })}
                    </ProjectTagWrapper>
                    <ProjectTagWrapper>
                      {project.tools &&
                        project.tools.map((tools, index) => {
                          return (
                            <ProjectTag
                              key={index}
                              src={`/svgs/${tools}.svg`}
                              alt={tools}
                            />
                          );
                        })}
                    </ProjectTagWrapper>
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
                  </ProjectContent>
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

const ProjectsStyled = styled.div`
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
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
  background-color: transparent;
  color: ${(props) => props.theme.bodyTextColor};

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    padding: 1.5rem 1rem;
  }
`;

const ProjectHashTag = styled.span`
  color: #8B949E;
  font-size: 1rem;
  & + & {
    padding-left: 1rem;
  }
`;

const ProjectImage = styled.figure`
  margin: 0rem;
  img {
    object-fit: cover;
    display: flex;
    height: 100%;
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

const ProjectWrapper = styled.div`
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
  color: #8B949E;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`;

const ShortDescription = styled.p`
  display: none;
  color: #8B949E;
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: block;
    color: #8B949E;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
  }
`;

const Project = styled.article`
  width: calc((100% - (10px * 2)) / 2);
  height: 400px;
  position: relative;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  margin-bottom: 3rem;


  &.flex {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${ProjectImage} {
      object-fit: cover;
      @media screen and (max-width: ${(props) => props.theme.tablet}) {
        display: none;
      }
    }

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      flex-direction: column;
    }
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
  position: absolute;
  bottom: 1.5em;
  max-width: 100%;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    bottom: 1.5rem;
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
