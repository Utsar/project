import styled, { css } from "styled-components/macro";

const Container = styled.div`
  position: relative;
  background: teal;
  top: 100px;
  height: calc(100vh - 100px);
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LandingForm = styled.input`
  padding: 0.5rem;
  border: none;
  margin-right: 0.2rem;
  width: 100%;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const LandingSelect = styled.select`
  padding: 0.5rem;
  width: 100%;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 500;
  background: green;
`;

const Hero = () => {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroTextTitle>Inspiration is Wonderful</HeroTextTitle>
          <HeroTextSlogan>Home for every event</HeroTextSlogan>
        </HeroWrapper>
        <LandingFormContainer>
          <LandingForm placeholder="What are you planning?" type="text" />
          <LandingForm placeholder="Location" />
          <LandingSelect placeholder="Guest" type="select">
            <option>0-10</option>
            <option>11-25</option>
            <option>26-50</option>
            <option>51-100</option>
            <option>101-150</option>
            <option>151-200</option>
            <option>200+</option>
          </LandingSelect>
          <LandingForm type="date" />
          <Button>Submit</Button>
        </LandingFormContainer>
      </Container>
    </>
  );
};

export default Hero;
