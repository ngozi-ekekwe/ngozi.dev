import styled from "styled-components";

function Sidebar({ isActive }) {
  return (
    <SidebarStyled className={isActive ? 'active': ''}>
      <ul class="nav-links">
        <h3>Twitter</h3>
        <h3>Youtube</h3>
        <h3>Instragram</h3>
      </ul>
      <div class="contact">
        <h2>Stay in touch.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem
          praesentium ea amet error quidem natus. Magnam explicabo sed tenetur?
        </p>
      </div>
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
