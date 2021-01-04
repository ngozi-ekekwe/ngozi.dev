import { projectsDirectory } from "../utils/projects";
import styled, { keyframes } from "styled-components";

function Projects() {
  return (
    <ProjectsStyled>
      <SectionTitle>Selected Projects</SectionTitle>
      <ProjectWrapper>
        {projectsDirectory &&
          projectsDirectory.map((project) => {
            return (
              <Project className={project.block ? "flex" : ""}>
                {project.block && (
                  <ProjectImage
                    src={project.backgroundImage}
                    alt=""
                  ></ProjectImage>
                )}
                <ProjectContent>
                  <ProjectHeader>{project.name}</ProjectHeader>
                  <ShortDescription>{project.short}</ShortDescription>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTagWrapper>
                    {project.tags &&
                      project.tags.map((tag) => {
                        return <ProjectTag>{tag}</ProjectTag>;
                      })}
                  </ProjectTagWrapper>
                  <ProjectFooter>
                    <ProjectLink>Source Code</ProjectLink>
                    <ProjectLink>Live site</ProjectLink>
                  </ProjectFooter>
                </ProjectContent>
              </Project>
            );
          })}
      </ProjectWrapper>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.section`
  width: 80%;
  margin: 2rem auto;
  margin-top: 200px;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-top: 150px;
  }
`;

const ProjectContent = styled.div`
  height: 100%;
  position: relative;
  padding: 1.5rem 2rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    width: 95%;
  }

`;

const ProjectImage = styled.img`
  height: 100%;
  width: auto;
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
  margin-top: 4rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-top: 2rem;
  }
`;

const ProjectHeader = styled.header`
  font-size: 2rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  line-height: 1.7;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`;

const ShortDescription = styled.p`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
  display: block;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
  }
`;

const Project = styled.div`
  width: calc((100% - (10px * 2)) / 2);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fbfbfd;
  margin-bottom: 3rem;
  height: 400px;

  animation-name: ${Slide};
  animation-duration: 0.75s;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    width: 100%;
    height: 250px;
  }

  &.flex {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      
      @media screen and (max-width: ${(props) => props.theme.tablet}) {
        display: none;
      }
    }

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      flex-direction: column;
    }
  }
`;

export const ProjectTagWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
`;

export const ProjectTag = styled.a`
  background-color: rgba(32,33,36,0);
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  height: 32px;
  line-height: 30px;
  margin: 0 8px 12px 0;
  overflow: hidden;
  padding: 0 12px;
  text-decoration: none;
  -webkit-transition: background-color .2s,border .2s;
  transition: background-color .2s,border .2s;
  text-wrap: wrap;
}
`;

const ProjectFooter = styled.footer`
  diplsay: flex;
  position: absolute;
  bottom: 2.5rem;
  width: 100%;
`;

const ProjectLink = styled.a`
  margin-right: 1rem;
  font-size: 1.2rem;
  position: relative;
  z-index: 1;

  &::after {
    background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);
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
    background-color: red;
  }
`;

export default Projects;
