import styled from "styled-components";

function Articles() {
  return (
    <ArticleDiv>
      <ArticleWrapper>
        <SectionTitle>Journal</SectionTitle>
        <ArticleStyled>
          <LeftBox href="https://medium.com/@rose.ekekwe">
            <h3>Meduim</h3>
          </LeftBox>
          <RightBox href="https://dev.to/ngoziekekwe">
            <h3>Dev.to</h3>
          </RightBox>
        </ArticleStyled>
      </ArticleWrapper>
    </ArticleDiv>
  );
}

const ArticleDiv = styled.section`
  background-color: ${(props) => props.theme.headerBackgroundColor};
`;
const ArticleWrapper = styled.article`
  min-height: 50vh;
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
`;

const ArticleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30vh;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    flex-direction: column;
  }
`;

const LeftBox = styled.a`
  height: 100%;
  width: calc((100% - (10px * 2)) / 2);
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 2rem;
  justify-content: center;
  transition: all 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

const RightBox = styled.a`
  height: 100%;
  
  width: calc((100% - (10px * 2)) / 2);
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  display: flex;
  font-size: 2rem;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  transition: all 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1.5rem;
    width: 100%;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default Articles;
