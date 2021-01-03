import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Cursor() {
  const mouse = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", cursor);
    window.addEventListener("mouseover", activeCursor);
  }, []);

  const cursor = (e) => {
    mouse.current.style.top = e.pageY + "px";
    mouse.current.style.left = e.pageX + "px";
  };

  const activeCursor = (e) => {
    const item = e.target;
    if(item.id === 'logo' || item.id === 'hamburger') {
      mouse.current.classList.add("nav-active");
    }else {
      mouse.current.classList.remove("nav-active");
    }
  };
  return (
    <CursorStyled className="cursor" ref={mouse}>
      <span className="cursor-text"></span>
    </CursorStyled>
  );
}

const CursorStyled = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  transition-property: background, transform;
  transform-origin: 75% 75%;

  &.nav-active {
    background: rgb(86, 124, 228);
    transform: scale(2);
  }
`;

export default Cursor;
