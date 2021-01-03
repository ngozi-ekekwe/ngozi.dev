import styled from "styled-components";

function Header({ setIsActive, isActive}) {
  const toggleMenu = () => {
    setIsActive(!isActive)
  }
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/" id="logo">ng.me</Logo>
        <Hamburger id="hamburger" onClick={toggleMenu} className={isActive ? 'active': ''}>
          <FirstLine></FirstLine>
          <SecondLine></SecondLine>
        </Hamburger>
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 80%;
  position: relative;
  z-index: 2;
  min-height: 10vh;
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
  font-size: 2rem;
`;

const FirstLine = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: black;
  pointer-events: none;
`;

const SecondLine = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: black;
  pointer-events: none;
`;

const Hamburger = styled.div`
  cursor: pointer;
  transition: all .5s ease;
  &.active > ${FirstLine}{
    transform: translateY(5px) rotate(45deg);
    background: red;
  }
  &.active > ${SecondLine}{
    transform: translateY(-5px) rotate(-45deg);
    background: red;
  }
`;

export default Header;
