export const color = {
  backgroundDark: "#0f1218",
  backgroundLight: "#ffffff",
  linearGradient: "linear-gradient(to right, #e3ffe7, #d9e7ff)",
  defaultLightColor: "linear-gradient(to right, #e3ffe7, #d9e7ff)",
  white: "white",
  black: "#24292E",
  plainBlack: 'black',
  lightGray: "#fafafa"
};

export const lightTheme = {
  experienceCard: color.backgroundLight,
  cardBackgroundColor: color.lightGray,
  bodyBackground: color.lightGray,
  bodyTextColor: color.black,
  headerBackgroundColor: color.backgroundLight,
  headerTextColor: color.backgroundDark,
  defaultColor: color.defaultLightColor,
  background: color.backgroundLight,
  borderColor: color.lightGray,
};

export const darkTheme = {
  experienceCard: color.plainBlack,
  cardBackgroundColor: color.backgroundDark,
  bodyBackground: color.backgroundDark,
  bodyTextColor: color.white,
  headerBackgroundColor: "#161c23",
  headerTextColor: color.backgroundLight,
  defaultColor: `linear-gradient(to right, ${color.backgroundDark}, ${color.backgroundDark})`,
  background: color.backgroundDark, 
  borderColor: color.lightGray,
};

export const screenSizes = {
  tablet: "48em",
  desktop: "em",
  space: "1rem",
  maxWidth: "1200px",
};
