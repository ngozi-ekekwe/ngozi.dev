import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";

function Sidebar({ isActive, setCurrentTheme, currentTheme }) {
  return (
    <SidebarStyled className={isActive ? "active" : ""}>
      <Wrapper>
        <ThemeSelector
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
        ></ThemeSelector>
        <Header>Hello there!, thank you for visiting my porftfolio</Header>

        <Contact>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <button>Say Hello 👋🏼</button>
        </Contact>
        <ul class="nav-links">
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </Wrapper>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: ${(props) => props.theme.defaultColor};
  color: ${(props) => props.theme.bodyColor};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  opacity: 1;
  transition: all 1s ease;
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);

  &.active {
    clip-path: circle(2500px at 100% -10%);
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1rem;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    margin: 1.5rem 0;
    display: flex;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      flex-direction: column;
    }

    li {
      list-style: none;
      font-size: 1.2rem;
      padding-right: 2rem;

      @media screen and (max-width: ${(props) => props.theme.tablet}) {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 5rem auto;
  }
`;

const Contact = styled.div`
  text-align: center;

  button {
    background-color: #fa6400;
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
  }
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    text-align: center;
  }
`;

export default Sidebar;
