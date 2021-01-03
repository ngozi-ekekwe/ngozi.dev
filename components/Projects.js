import { projectsDirectory } from "../utils/projects";
import styled from "styled-components";

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
  margin: 0rem auto;
  margin-top: 200px;
`;

const ProjectContent = styled.div`
  height: 100%;
  position: relative;
  padding: 1.5rem 2rem;
`;

const ProjectImage = styled.img`
  height: 100%;
  width: auto;
`;

const ProjectWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
`;

const ProjectHeader = styled.header`
  font-size: 2rem;
`;

const ProjectDescription = styled.p`
  line-height: 1.7;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
`;

const Project = styled.div`
  width: calc((100% - (10px * 2)) / 2);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fbfbfd;
  margin-bottom: 3rem;
  height: 400px;

  &.flex {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${ProjectDescription} {
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
    // background-image: linear-gradient(to right, #e3ffe7, #fa6400);
    background-color: red;
  }
`;

export default Projects;
