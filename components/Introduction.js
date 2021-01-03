import styled from "styled-components";

function Introduction() {
  return (
    <StyledIntroduction>
      <Name>Ngozi Ekekwe</Name>
      <DescriptionWrapper>
        <Description>
          I’m a Front-End Developer working on Account Switch Kit, a solution
          that provides a fully digital workflow that allows users to switch
          their bank accounts and portfolios from one bank to another within
          minutes at Finleap Connect
        </Description>
      </DescriptionWrapper>
    </StyledIntroduction>
  );
}

const StyledIntroduction = styled.div`
  background-image: linear-gradient(to right, #e3ffe7, #d9e7ff);
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 3.5rem;
`;

const DescriptionWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Role = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.17;
`;

export default Introduction;
