import styled from "styled-components";

function Journey() {
  return (
    <JournerStyled>
      <JourneyWrapper>
        <SectionTitle>Journey & Interests</SectionTitle>
        <Description>
          <Paragraph>
            I have a BSc in computer science from Covenant University, although
            I only started programming in my second year I started programming
            in C# and Java while I was in school and then I adopted JavaScript
            just immediately after school.
          </Paragraph>
          <Paragraph>
            I draw my inspiration from events, things I see online and my
            interactions with people. I sketch out what I need to build and the
            components. This serves as a guide for me as I develop.
          </Paragraph>
          <Paragraph>
            I decided to focus and learn web development because of my love for
            beautiful things.
          </Paragraph>
          <Paragraph>
            I love travelling but I still get anxious when I fly so I prepare to
            travel by train.
          </Paragraph>

          <Paragraph>Currently learning German on Duolingo</Paragraph>
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

const SectionTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
  list-style: none;
`;

const Paragraph = styled.li`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1.2rem;
  list-style: none;

  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    font-size: 1rem;
  }

  &::before {
    content: "•";
    color: red;
    display: inline-block;
    width: 1.3em;
    margin-left: -1em;
  }
`;

const Description = styled.ul`
  padding: 1rem 0;
`;

export default Journey;
