import styled from "styled-components";

function Articles() {
  return (
    <ArticleWrapper>
      <SectionTitle>Journal</SectionTitle>
      <ArticleStyled>
        <LeftBox href="">
          <h3>Meduim</h3>
        </LeftBox>
        <RightBox href="">
          <h3>Dev.to</h3>
        </RightBox>
      </ArticleStyled>
    </ArticleWrapper>
  );
}

const ArticleWrapper = styled.section`
  min-height: 50vh;
  width: 80%;
  margin: auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
`;

const ArticleStyled = styled.div`
  display: flex;
  height: 30vh;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    flex-direction: column;
  }
`;

const LeftBox = styled.a`
  height: 100%;
  width: 100%;
  border: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  font-size: 2rem;
  background-color: black;
  color: white;
  justify-content: center;
  transition: all 0.75s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const RightBox = styled.a`
  height: 100%;
  width: 100%;
  border: 1px solid #f2f2f2;
  display: flex;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  transition: all 0.75s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Articles;
