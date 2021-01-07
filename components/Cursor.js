import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Cursor() {
  const mouse = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", cursor);
    window.addEventListener("mouseover", activeCursor);
  }, []);

  const cursor = (e) => {
    if(mouse.current) {
      mouse.current.style.top = e.pageY + "px";
      mouse.current.style.left = e.pageX + "px";
    }
  };

  const activeCursor = (e) => {
    const item = e.target;
    if(item.id === 'logo' || item.id === 'hamburger') {
      mouse.current &&  mouse.current.classList.add("nav-active");
    }else {
      mouse.current && mouse.current.classList.remove("nav-active");
    }
    if(item.id === 'profile') {
      mouse.current &&  mouse.current.classList.add("profile-active");
    }else {
      mouse.current && mouse.current.classList.remove("profile-active");
    }
  };
  return (
    <CursorStyled className="cursor" ref={mouse}>
      <span className="cursor-text"></span>
    </CursorStyled>
  );
}

const CursorStyled = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid #d9e7ff;
  background: #d9e7ff;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  transition-property: background, transform;
  transform-origin: 75% 75%;
  opacity: 0.8;

  &.nav-active {
    background: #d9e7ff;
    transform: scale(2);
  }

  &.profile-active {
    background: #e3ffe7;
    opacity: 0.8;
    transform: scale(6);
  }
`;

export default Cursor;
