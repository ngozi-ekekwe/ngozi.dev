import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";

function Header({ setIsActive, isActive, setCurrentTheme, currentTheme }) {
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Nav>
          <Logo href="/" id="logo">
            ng.me
          </Logo>
          <ThemeSelector
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          ></ThemeSelector>
          <Hamburger
            id="hamburger"
            onClick={toggleMenu}
            className={isActive ? "active" : ""}
          >
            <FirstLine></FirstLine>
            <SecondLine></SecondLine>
          </Hamburger>
        </Nav>
      </StyledHeader>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  z-index: 2;
`;

const StyledHeader = styled.div`
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 6vh;
  display: flex;
  align-items: center;
  margin: auto;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.headerTextColor};
`;

const FirstLine = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: ${(props) => props.theme.headerTextColor};
  pointer-events: none;
`;

const SecondLine = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: ${(props) => props.theme.headerTextColor};
  pointer-events: none;
`;

const Hamburger = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &.active > ${FirstLine} {
    transform: translateY(5px) rotate(45deg);
    background: ${(props) => props.theme.headerTextColor};
  }
  &.active > ${SecondLine} {
    transform: translateY(-5px) rotate(-45deg);
    background: ${(props) => props.theme.headerTextColor};
  }
`;

export default Header;
