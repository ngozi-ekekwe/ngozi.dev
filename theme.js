export const color = {
  backgroundDark: "#0f1218",
  backgroundLight: "#ffffff",
  linearGradient: "linear-gradient(to right, #e3ffe7, #d9e7ff)",
  defaultLightColor: "linear-gradient(to right, #e3ffe7, #d9e7ff)",
  white: "#C9D1D9",
  black: "#24292E",
  lightGray: "#fafafa",
  red: 'red',


};

export const lightTheme = {
  themeSelectorLeftBackgroundColor: color.lightGray,
  themeSelectorRightBackgroundColor: color.backgroundDark,
  themeSelectorLeftTextColor: '#414143',
  themeSelectoRightTextColor: color.white,
  
  bodyBackground: color.backgroundLight,
  bodyTextColor: color.black,

  headerBackgroundColor: color.backgroundLight,
  headerTextColor: color.backgroundDark,

  defaultColor: color.defaultLightColor,
  background: color.backgroundLight,
  cardBackgroundColor: color.lightGray,
  borderColor: color.lightGray,
  
  
  highlightOrange: "#fa6400",
};

export const darkTheme = {
  themeSelectorLeftBackgroundColor: color.backgroundDark,
  themeSelectorRightBackgroundColor: color.backgroundDark,
  themeSelectorLeftTextColor: color.white,
  themeSelectoRightTextColor: color.white,


  headerBackgroundColor: "#161c23",
  headerTextColor: color.backgroundLight,

  bodyBackground: color.backgroundDark,
  bodyTextColor: color.white,


  defaultColor: `linear-gradient(to right, ${color.backgroundDark}, ${color.backgroundDark})`,
  background: color.backgroundDark,
  cardBackgroundColor: color.backgroundDark,
  
  borderColor: color.lightGray,
  highlightOrange: "#fa6400",
  
};

export const screenSizes = {
  tablet: "48em",
  desktop: "em",
  space: "1rem",
  maxWidth: "1200px",
};
