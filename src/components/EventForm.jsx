import styled from "styled-components";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-ui/core";
import { WeddingQuestions } from "../assets/data/EventFormData.js";
import { useState } from "react";

// Styling the main container to be centered on the page
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Importing the data for the form
const steps = WeddingQuestions.steps;

const EventForm = () => {
  // Keeping track of the current step the user is on
  const [activeStep, setActiveStep] = useState(0);

  // Function to move to the next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Function to move to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to reset the form to the first step
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="horizontal">
          {/* Mapping through the steps data to create each step */}
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                // If on the last step, displaying a message indicating it's the last step
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <div>
                  {/* Mapping through the questions for each step to create them */}
                  {step.questions.map((question, qIndex) => (
                    <div key={qIndex}>
                      <Typography>{question.label}</Typography>
                      <input type={question.type} />
                    </div>
                  ))}
                </div>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {/* If on the last step, displaying the text 'Finish' instead of 'Continue' */}
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      // Disabling the back button on the first step
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {/* When all steps are completed, displaying a message and a reset button */}
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default EventForm;
