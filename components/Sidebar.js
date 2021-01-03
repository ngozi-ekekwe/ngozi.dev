import styled from "styled-components";

function Sidebar({ isActive }) {
  return (
    <SidebarStyled className={isActive ? "active" : ""}>
      {/* <ToggleTheme>Toggle Theme</ToggleTheme> */}
      <Wrapper>
        <ul class="nav-links">
          <h3>Twitter</h3>
          <h3>Youtube</h3>
          <h3>LinkedIn</h3>
          <h3>Instagram</h3>
        </ul>
        <Contact>
          <h2>Send me a message!</h2>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </Contact>
      </Wrapper>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
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

const ToggleTheme = styled.button`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    padding: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 5rem auto;
  }
`;

const Contact = styled.div`
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    text-align: center;
  }
`;

export default Sidebar;
