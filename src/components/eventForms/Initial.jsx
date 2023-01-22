import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const LandingForm = styled.input`
  padding: 0.7rem;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: none;
  background: whitesmoke;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }
`;
const LandingSelect = styled.select`
  padding: 0.7rem;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: none;
  background: whitesmoke;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 0.7rem;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 500;
  background: green;
  cursor: pointer;
`;
const LandingFormContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 47%;
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
const Initial = () => {
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("eventType", eventType);
    localStorage.setItem("location", location);
    localStorage.setItem("guestCount", guestCount);
    localStorage.setItem("date", date);
  };

  return (
    <>
      <LandingFormContainer>
        <LandingForm
          key="eventType"
          placeholder="What are you planning?"
          type="text"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          style={{ minWidth: "19ch" }}
        />
        <LandingForm
          key="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <LandingSelect
          placeholder="Guest"
          type="select"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
        >
          <option>0-10</option>
          <option>11-25</option>
          <option>26-50</option>
          <option>51-100</option>
          <option>101-150</option>
          <option>151-200</option>
          <option>200+</option>
        </LandingSelect>
        <LandingForm
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Link to="/formJourney" onClick={handleSubmit}>
          <Button>Submit</Button>
        </Link>
      </LandingFormContainer>
    </>
  );
};

export default Initial;
