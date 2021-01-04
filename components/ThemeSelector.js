import styled from "styled-components";

function ThemeSelector({ setCurrentTheme }) {
  return (
  <ThemeSelectorStyled>
    <LightTheme onClick={() => setCurrentTheme('light')}>
      <button>LIGHT THEME</button>
    </LightTheme>
    <DarkTheme onClick={() => setCurrentTheme('dark')}>
      <button>DARK THEME</button>
    </DarkTheme>
  </ThemeSelectorStyled>);
}

const ThemeSelectorStyled = styled.section`
  min-height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const LightTheme = styled.div`
  width: 100%;

  button {
    width: 100%;
    height: 100%;
    border: 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.themeSelectorLeftBackgroundColor};
    font-size: 1rem;
    color: ${(props) => props.theme.themeSelectorLeftTextColor};

    &:focus {
      outline: none;
    }
  }
`;

const DarkTheme = styled.div`
  color: white;
  width: 100%;

  button {
    width: 100%;
    height: 100%;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.themeSelectoRightTextColor};
    background-color: ${(props) => props.theme.themeSelectorRightBackgroundColor};
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
`;



export default ThemeSelector;
