import styled from "styled-components";

function Header(props) {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">ngozi-ekekwe</Logo>
        <Hamburger>
          <Line></Line>
          <Line></Line>
        </Hamburger>
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 80%;
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

const Hamburger = styled.div`
  cursor: pointer;
`;

const Line = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: black;
  pointer-events: none;
`;

export default Header;
