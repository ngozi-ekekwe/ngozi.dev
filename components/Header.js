import styled from "styled-components";

function Header({ setIsActive, isActive }) {
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
  min-height: 6vh; 
  display: flex;
  align-items: center;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: underline;
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
