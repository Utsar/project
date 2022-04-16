import styled, { css } from "styled-components/macro";

const Container = styled.div`
  position: relative;
  background: teal;
  top: 100px;
  height: 100vh;
`;
const HeroWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroTextTitle = styled.h1``;
const HeroTextSlogan = styled.p``;

const LandingFormContainer = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LandingForm = styled.input``;
const LandingSelect = styled.select``;
const Button = styled.button``;

const Hero = () => {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroTextTitle>Inspiration is Wonderful</HeroTextTitle>
          <HeroTextSlogan>Home for every event</HeroTextSlogan>
        </HeroWrapper>
        <LandingFormContainer>
          <LandingForm placeholder="What are you planning ?" />
          <LandingForm placeholder="Location" />
          <LandingSelect placeholder="No. of people" type="select" />
          <LandingForm type="date" />
          <Button>Submit</Button>
        </LandingFormContainer>
      </Container>
    </>
  );
};

export default Hero;
