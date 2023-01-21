import styled from "styled-components/macro";
import Initial from "./eventForms/Initial";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: black;
`;
const HeroWrapper = styled.div`
  position: absolute;
  top: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    top: 20%;
  }
`;
const HeroTextTitle = styled.h1`
  color: whitesmoke;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 20%;
  }
`;
const HeroTextSlogan = styled.p`
  color: whitesmoke;
`;

const Hero = () => {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroTextTitle>Inspiration is Wonderful</HeroTextTitle>
          <HeroTextSlogan>Home for every event</HeroTextSlogan>
        </HeroWrapper>
        {/* importing landing page Initial form */}
        <Initial />
      </Container>
    </>
  );
};

export default Hero;
