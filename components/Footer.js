import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <small>&copy;  Forever and ever until the end of time 💞</small>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  height: 100px;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items:center;
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);

`

export default Footer;