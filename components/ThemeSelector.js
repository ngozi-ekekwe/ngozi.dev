import styled from "styled-components";

function ThemeSelector({ setCurrentTheme, currentTheme }) {
  const toggleTheme = () => {
    let theme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(theme);
  }
  return (
    <ThemeSelectorStyled>
      <ToggleWrapper>
        <Label className="theme-switch" htmlFor="checkbox">
          <Input type="checkbox" id="checkbox" onChange={toggleTheme} />
          <Slider className="slider round">
            
          </Slider>
        </Label>
      </ToggleWrapper>
    </ThemeSelectorStyled>
  );
}

const ThemeSelectorStyled = styled.section`
  min-height: 4vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-block;
  height: 26px;
  position: relative;
  width: 60px;
`;

const Slider = styled.div`
  background-color: black;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: #fff;
    bottom: 3px;
    content: "";
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
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
    background-color: #fa6400;
    border: 1px solid ${(props) =>props.theme.lightGray};
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;
export default ThemeSelector;
