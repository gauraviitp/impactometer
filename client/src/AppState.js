const AppState = {
  questions: [
    {
      id: "1",
      text: "How many people live in your household?",
      options: [
        { id: "1", text: "1", percentage: 20 },
        { id: "2", text: "2", percentage: 20 },
        { id: "3", text: "3", percentage: 20 },
        { id: "4", text: "4", percentage: 20 },
        { id: "5", text: "5+", percentage: 20 },
      ],
      selectedOption: "-1",
    },
    {
      id: "2",
      text: "On average how many cups of tea/coffee do you have a day?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 3", percentage: 25 },
        { id: "3", text: "4 - 6", percentage: 25 },
        { id: "4", text: "7+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "3",
      text: "How many times do you use a dishwasher (weekly)?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 3", percentage: 25 },
        { id: "3", text: "4 - 6", percentage: 25 },
        { id: "4", text: "7+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "4",
      text: "How many washing machine loads do you do (weekly)?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 3", percentage: 25 },
        { id: "3", text: "4 - 6", percentage: 25 },
        { id: "4", text: "7+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "5",
      text: "If you have a tumble dryer, how often do you use it (weekly)?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 3", percentage: 25 },
        { id: "3", text: "4 - 6", percentage: 25 },
        { id: "4", text: "7+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "6",
      text: "Do you drive? If so how many miles do you drive (weekly)?",
      options: [
        { id: "1", text: "don't drive", percentage: 20 },
        { id: "2", text: "< 43", percentage: 20 },
        { id: "3", text: "43 - 77", percentage: 20 },
        { id: "4", text: "77 - 196", percentage: 20 },
        { id: "5", text: "196+", percentage: 20 },
      ],
      selectedOption: "-1",
    },
    {
      id: "7",
      text: "Do you have a heating thermostat?",
      options: [
        { id: "1", text: "yes", percentage: 50 },
        { id: "2", text: "no", percentage: 50 },
      ],
      selectedOption: "-1",
    },
    {
      id: "8",
      text: "Roughly how may halogen bulbs do you have in your home?",
      options: [
        { id: "1", text: "none", percentage: 20 },
        { id: "2", text: "1 - 3", percentage: 20 },
        { id: "3", text: "4 - 6", percentage: 20 },
        { id: "4", text: "7 - 9", percentage: 20 },
        { id: "5", text: "10+", percentage: 20 },
      ],
      selectedOption: "-1",
    },
    {
      id: "9",
      text: "Roughly how may LED bulbs do you have in your home?",
      options: [
        { id: "1", text: "none", percentage: 20 },
        { id: "2", text: "1 - 3", percentage: 20 },
        { id: "3", text: "4 - 6", percentage: 20 },
        { id: "4", text: "7 - 9", percentage: 20 },
        { id: "5", text: "10+", percentage: 20 },
      ],
      selectedOption: "-1",
    },
    {
      id: "10",
      text: "How many mobile phones do you have in your household?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 2", percentage: 25 },
        { id: "3", text: "3 - 4", percentage: 25 },
        { id: "4", text: "5+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "11",
      text: "How many tablets/iPads do you have in your household?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 2", percentage: 25 },
        { id: "3", text: "3 - 4", percentage: 25 },
        { id: "4", text: "5+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "12",
      text: "How many laptops do you have in your household?",
      options: [
        { id: "1", text: "none", percentage: 25 },
        { id: "2", text: "1 - 2", percentage: 25 },
        { id: "3", text: "3 - 4", percentage: 25 },
        { id: "4", text: "5+", percentage: 25 },
      ],
      selectedOption: "-1",
    },
    {
      id: "13",
      text:
        "On a scale of 1-10 how often do you remember to turn off a plug that you have finished using?",
      options: [
        { id: "1", text: "1", percentage: 10 },
        { id: "2", text: "2", percentage: 10 },
        { id: "3", text: "3", percentage: 10 },
        { id: "4", text: "4", percentage: 10 },
        { id: "5", text: "5", percentage: 10 },
        { id: "6", text: "6", percentage: 10 },
        { id: "7", text: "7", percentage: 10 },
        { id: "8", text: "8", percentage: 10 },
        { id: "9", text: "9", percentage: 10 },
        { id: "10", text: "10", percentage: 10 },
      ],
      selectedOption: "-1",
    },

    {
      id: "14",
      text:
        "On a scale of 1-10 how often do you throw away food because it's not been eaten in time each week?",
      options: [
        { id: "1", text: "1", percentage: 10 },
        { id: "2", text: "2", percentage: 10 },
        { id: "3", text: "3", percentage: 10 },
        { id: "4", text: "4", percentage: 10 },
        { id: "5", text: "5", percentage: 10 },
        { id: "6", text: "6", percentage: 10 },
        { id: "7", text: "7", percentage: 10 },
        { id: "8", text: "8", percentage: 10 },
        { id: "9", text: "9", percentage: 10 },
        { id: "10", text: "10", percentage: 10 },
      ],
      selectedOption: "-1",
    },
  ],
};

export default AppState;
