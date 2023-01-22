export const WeddingQuestions = {
  eventType: "Wedding",
  steps: [
    {
      step: 1,
      label: "Which cuisine do you prefer",
      questions: [
        {
          label: "Mediterranian",
          type: "text",
        },
        {
          label: "Indian",
          type: "text",
        },
        {
          label: "American",
          type: "text",
        },
      ],
    },
    {
      step: 2,
      label: "Select wedding party",
      questions: [
        {
          label: "How many bridesmaids and groomsmen do you want?",
          type: "number",
        },
        {
          label: "What are the names of your bridesmaids and groomsmen?",
          type: "text",
        },
        {
          label: "Do you have any special requests for the wedding party?",
          type: "text",
        },
      ],
    },
    {
      step: 3,
      label: "Select wedding vendors",
      questions: [
        {
          label: "What type of catering do you want?",
          type: "text",
        },
        {
          label: "Who do you want to provide the music?",
          type: "text",
        },
        {
          label: "Which florist do you want to use?",
          type: "text",
        },
      ],
    },
    {
      step: 4,
      label: "Select wedding attire",
      questions: [
        {
          label: "What type of dress do you want?",
          type: "text",
        },
        {
          label: "What type of suit do you want?",
          type: "text",
        },
        {
          label: "What are your desired colors for the attire?",
          type: "text",
        },
      ],
    },
    {
      step: 5,
      label: "Select wedding favors",
      questions: [
        {
          label: "What type of favors do you want to give?",
          type: "text",
        },
        {
          label: "How many favors do you want to give?",
          type: "number",
        },
        {
          label: "What is your budget for the favors?",
          type: "number",
        },
      ],
    },
    {
      step: 6,
      label: "Select wedding transportation",
      questions: [
        {
          label: "What type of transportation do you want?",
          type: "text",
        },
        {
          label: "How many cars or buses do you need?",
          type: "number",
        },
        {
          label: "Do you have any special requests for the transportation?",
          type: "text",
        },
      ],
    },
  ],
};
