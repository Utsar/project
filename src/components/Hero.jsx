import styled, { css } from "styled-components/macro";

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
  top: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const HeroTextTitle = styled.h1`
  color: whitesmoke;
`;
const HeroTextSlogan = styled.p`
  color: whitesmoke;
`;

const LandingForm = styled.input`
  padding: 0.5rem;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: none;
  background: whitesmoke;

  &:focus {
    outline: none;
  }
`;
const LandingSelect = styled.select`
  padding: 0.5rem;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: none;
  background: whitesmoke;

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
const LandingFormContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    ${LandingForm} {
      width: 260px;
      margin-bottom: 5px;
    }
    ${LandingSelect} {
      width: 278px;
      margin-bottom: 5px;
    }
    ${Button} {
      width: 100px;
    }
  }
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
          <LandingForm
            placeholder="What are you planning?"
            type="text"
            style={{ minWidth: "19ch" }}
          />
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
