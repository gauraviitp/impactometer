const AppState = {
  currentQuestionId: "0",
  questions: [
    {
      id: "0",
      text: "How many times a week do you run your dishwasher?",
      options: [
        { id: "1", text: "none", percentage: 20, co2: 10 },
        { id: "2", text: "1 - 3 times a week", percentage: 20, co2: 10 },
        { id: "3", text: "4 - 6 times a week", percentage: 20, co2: 20 },
        { id: "4", text: "more than 7 times a week", percentage: 20, co2: 30 },
      ],
      selectedOption: "-1",
      average: 3.5,
      mostPopular: 3,
      groupText: "In the kitchen",
      tipHeading:
        "Did you know that it takes 0.46 kg Co2 to run a dishwasher for one cycle",
      tipText: "That's more than one tree can absorb in a year!",
      image: "/images/in the kitchen.svg",
    },
    {
      id: "1",
      text: "How many people live in your household?",
      options: [
        { id: "1", text: "1", percentage: 20, co2: 10 },
        { id: "2", text: "2", percentage: 20, co2: 10 },
        { id: "3", text: "3", percentage: 20, co2: 20 },
        { id: "4", text: "4", percentage: 20, co2: 30 },
        { id: "5", text: "5+", percentage: 20, co2: 10 },
      ],
      selectedOption: "-1",
      average: 3.5,
      mostPopular: 3,
      groupText: "In the kitchen",
      tipHeading:
        "Did you know that it takes 0.96 kg Co2 to run a dishwasher for one cycle",
      tipText: "That's more than one tree can absorb in a year!",
      image: "/images/in the kitchen.svg",
    },
    {
      id: "2",
      text:
        "You're looking thirsty, but tell us how many cups of tea/coffee are you chugging a day?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 20 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 30 },
        { id: "4", text: "7+", percentage: 25, co2: 40 },
      ],
      selectedOption: "-1",
      average: 4,
      mostPopular: 2,
    },
    {
      id: "3",
      text:
        "Having a maid was so 1900's, anyway people tend to have a dishwasher nowadays, how often do you use it per week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 10 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 10 },
        { id: "4", text: "7+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 3,
      mostPopular: 2,
    },
    {
      id: "4",
      text:
        "HI'm not saying you smell.....but, how often do you use your washing machine a week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 10 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 10 },
        { id: "4", text: "7+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 2,
      mostPopular: 2,
    },
    {
      id: "5",
      text:
        "And once those clothes are all clean, if you use a tumble dryer tell us how often that is a week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 10 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 10 },
        { id: "4", text: "7+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 2.5,
      mostPopular: 3,
    },
    {
      id: "6",
      text:
        "You're rockin' some nice wheels man, how many miles are you clocking up per week? (We mean car btw)",
      options: [
        { id: "1", text: "don't drive", percentage: 20, co2: 10 },
        { id: "2", text: "< 43", percentage: 20, co2: 10 },
        { id: "3", text: "43 - 77", percentage: 20, co2: 10 },
        { id: "4", text: "77 - 196", percentage: 20, co2: 10 },
        { id: "5", text: "196+", percentage: 20, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 4,
    },
    {
      id: "7",
      text: "This ones a quicky, do you have a heating thermostat?",
      options: [
        { id: "1", text: "yes", percentage: 50, co2: 10 },
        { id: "2", text: "no", percentage: 50, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "8",
      text:
        "Nelly said 'It's gettin' hot in here'....but seriously how many halogen bulbs does your crib have?",
      options: [
        { id: "1", text: "none", percentage: 20, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 20, co2: 10 },
        { id: "3", text: "4 - 6", percentage: 20, co2: 10 },
        { id: "4", text: "7 - 9", percentage: 20, co2: 10 },
        { id: "5", text: "10+", percentage: 20, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "9",
      text: "Roughly how may LED bulbs do you have in your home?",
      options: [
        { id: "1", text: "none", percentage: 20, co2: 10 },
        { id: "2", text: "1 - 3", percentage: 20, co2: 10 },
        { id: "3", text: "4 - 6", percentage: 20, co2: 10 },
        { id: "4", text: "7 - 9", percentage: 20, co2: 10 },
        { id: "5", text: "10+", percentage: 20, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "10",
      text:
        "How many mobile phones do you have in your household? (it's not an excuse to go check your insta feed!!)",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 10 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 10 },
        { id: "4", text: "5+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "11",
      text:
        "How many tablets does your household have? We don't mean the prescription kind, they don't count!",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 10 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 10 },
        { id: "4", text: "5+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "12",
      text:
        "How many laptops does your household have? Even if you just take them to coffee shops to look busy!",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 10 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 10 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 10 },
        { id: "4", text: "5+", percentage: 25, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
    {
      id: "13",
      text:
        "How often do you remember to turn off the plug once you've finished using something? (1 = Errr NEVER! 10 = Everytime without fail obvs)",
      options: [
        { id: "1", text: "1", percentage: 10, co2: 10 },
        { id: "2", text: "2", percentage: 10, co2: 10 },
        { id: "3", text: "3", percentage: 10, co2: 10 },
        { id: "4", text: "4", percentage: 10, co2: 10 },
        { id: "5", text: "5", percentage: 10, co2: 10 },
        { id: "6", text: "6", percentage: 10, co2: 10 },
        { id: "7", text: "7", percentage: 10, co2: 10 },
        { id: "8", text: "8", percentage: 10, co2: 10 },
        { id: "9", text: "9", percentage: 10, co2: 10 },
        { id: "10", text: "10", percentage: 10, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },

    {
      id: "14",
      text:
        "How many portions of food would you throw away a week? (Lets say a portion is 1 average UK meal....not one of those big USA feeds!)",
      options: [
        { id: "1", text: "1", percentage: 10, co2: 10 },
        { id: "2", text: "2", percentage: 10, co2: 10 },
        { id: "3", text: "3", percentage: 10, co2: 10 },
        { id: "4", text: "4", percentage: 10, co2: 10 },
        { id: "5", text: "5", percentage: 10, co2: 10 },
        { id: "6", text: "6", percentage: 10, co2: 10 },
        { id: "7", text: "7", percentage: 10, co2: 10 },
        { id: "8", text: "8", percentage: 10, co2: 10 },
        { id: "9", text: "9", percentage: 10, co2: 10 },
        { id: "10", text: "10", percentage: 10, co2: 10 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
    },
  ],
};

export default AppState;
