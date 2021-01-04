import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <div>
      <button>Say Hello 👋🏼</button>
        <div className="test">
          <small>Designed and developed by me 💞</small>
          <small>&copy; Forever and ever until the end of time</small>
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
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 1rem auto;

    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      text-align: center;
      flex-direction: column;
    }
  }

  .test {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: #fa6400;
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    @media screen and (max-width: ${(props) => props.theme.tablet}) {
      margin: 1.5rem 0;
    }
  }
`;

export default Footer;
