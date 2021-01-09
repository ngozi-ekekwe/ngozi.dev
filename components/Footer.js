import styled from "styled-components";
import { SAY_HELLO, FOOTER_TIME_STAMP, FOOTER_NOTE } from "utils/constants";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <a href="mailto:rose.ekekwe@gmail.com">{SAY_HELLO}</a>
        <div className="flex">
          <small>{FOOTER_NOTE}</small>
          <small>&copy; {FOOTER_TIME_STAMP}</small>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  text-align: center;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.theme.defaultColor};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: ${(props) => props.theme.maxWidth};
    margin: 1rem auto;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      text-align: center;
      flex-direction: column;
    }
  }

  small {
    padding: 0.2rem 0;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }

  a {
    background-color: #fa6400;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      margin: 1.5rem 0;
    }
  }
`;

export default Footer;
