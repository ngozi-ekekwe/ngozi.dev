import styled from "styled-components";
import { JOURNEY_SECTION, JOURNEY_MAP } from 'utils/constants';

function Journey() {
  return (
    <JournerStyled>
      <JourneyWrapper>
        <SectionTitle>{JOURNEY_SECTION}</SectionTitle>
        <Description>
          {
            JOURNEY_MAP && JOURNEY_MAP.map((journey, index) => {
              return (
                <Paragraph key={index}>
                  {journey}
                </Paragraph>
              )
            })
          }
        </Description>
      </JourneyWrapper>
    </JournerStyled>
  );
}

const JournerStyled = styled.section`
  background-color: ${(props) => props.theme.lightGray};
`;

const JourneyWrapper = styled.div`
  width: 80%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  padding: 2rem 0;
  list-style: none;
`;

const Paragraph = styled.li`
  margin-bottom: 1.5rem;
  line-height: 2;
  font-size: 1.2rem;
  list-style: none;
  padding: 3.5rem 3.2rem;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.13);

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1rem;
    padding: 1rem 1.3rem;
  }
`;

const Description = styled.ul`
  padding: 1rem 0;
`;

export default Journey;
