import styled from "styled-components";

function ThemeSelector({ setCurrentTheme, currentTheme }) {
  const toggleTheme = () => {
    let theme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(theme);
  }
  return (
    <ThemeSelectorStyled>
      <ToggleWrapper>
        <Label className="theme-switch" for="checkbox" htmlFor="checkbox">
          <Input type="checkbox" id="checkbox" onChange={toggleTheme} />
          <Slider className="slider round"></Slider>
        </Label>
      </ToggleWrapper>
    </ThemeSelectorStyled>
  );
}

const ThemeSelectorStyled = styled.section`
  min-height: 4vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.themeSelectorBackgroundColor};
  color: white;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin: 0 auto;
`;

const Label = styled.label`
  display: inline-block;
  height: 30px;
  position: relative;
  width: 60px;
`;

const Slider = styled.div`
  background-color: #fa6400;
  opacity: 0.5;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  
  transition: 0.4s;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    height: 1.5rem;
  }

  &:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 20px;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      height: 15px;
      width: 15px;
    }
  }

  &.round {
    border-radius: 30px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + .slider {
    background-color: transparent;
    border: 1px solid ${(props) =>props.theme.lightGray};
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;
export default ThemeSelector;
