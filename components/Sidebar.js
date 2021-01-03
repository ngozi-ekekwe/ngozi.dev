import styled from "styled-components";

function Sidebar({ isActive }) {
  return (
    <SidebarStyled className={isActive ? 'active': ''}></SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  opacity: 1;
  transition: all 1s ease;
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);

  &.active {
    clip-path: circle(2500px at 100% -10%)
  }
`;

export default Sidebar;
