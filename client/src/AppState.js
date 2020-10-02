const AppState = {
  currentQuestionId: "1",
  submitted: true,
  questions: [
    // {
    //   id: "0",
    //   text: "Having a maid was so 1900's, anyway people tend to have a dishwasher nowadays, how often do you use yours per week?",
    //   options: [
    //     { id: "1", text: "none", percentage: 20, co2: 10 },
    //     { id: "2", text: "1 - 3 times a week", percentage: 20, co2: 10 },
    //     { id: "3", text: "4 - 6 times a week", percentage: 20, co2: 20 },
    //     { id: "4", text: "more than 7 times a week", percentage: 20, co2: 30 },
    //   ],
    //   selectedOption: "-1",
    //   average: 3.5,
    //   mostPopular: 3,
    //   groupText: "In the kitchen",
    //   tipHeading:
    //     "Did you know that it takes 0.46 kg Co2 to run a dishwasher for one cycle",
    //   tipText: "Collectively that's more Co2 than a mature tree can absorb in a year!",
    //   image: "/images/in the kitchen.svg",
    // },
    {
      id: "1",
      text: "How many people live in your household?",
      options: [
        { id: "1", text: "1", percentage: 20, co2: 8340 },
        { id: "2", text: "2", percentage: 20, co2: 16680 },
        { id: "3", text: "3", percentage: 20, co2: 25020 },
        { id: "4", text: "4", percentage: 20, co2: 33360 },
        { id: "5", text: "5+", percentage: 20, co2: 41700 },
      ],
      selectedOption: "-1",
      average: 3.5,
      mostPopular: 3,
      groupText: "What you use",
      tipHeading: "Did you know the average Co2 per person is 8340kg?",
      tipText:
        "We're not saying give a family member away, it's just an interesting stat",
      image: "/images/what you use.svg",
    },
    {
      id: "2",
      text:
        "You're looking thirsty, but tell us how many cups of tea/coffee are you chugging a day?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 54.75 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 109.5 },
        { id: "4", text: "7+", percentage: 25, co2: 127.75 },
      ],
      selectedOption: "-1",
      average: 4,
      mostPopular: 2,
      groupText: "What you use",
      tipHeading:
        "Drinking just one less hot drink per day could save 17.28kg Co2 per year",
      tipText: "That's equivalent to driving 43 miles in an average sized car!",
      image: "/images/what you use.svg",
    },
    {
      id: "3",
      text:
        "Having a maid was so 1900's, anyway people tend to have a dishwasher nowadays, how often do you use it per week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 63.65 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 127.3 },
        { id: "4", text: "7+", percentage: 25, co2: 148.51 },
      ],
      selectedOption: "-1",
      average: 3,
      mostPopular: 2,
      groupText: "In the kitchen",
      tipHeading:
        "Running just one less cycle per week could save 24.11kg Co2 per year. Make sure you fill the dishwasher each time you use it, to reduce the number of cycles you need",
      tipText: "That's more that one tree can absorb in a year!",
      image: "/images/in the kitchen.svg",
    },
    {
      id: "4",
      text:
        "I'm not saying you smell.....but, how often do you use your washing machine a week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 27.77 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 55.54 },
        { id: "4", text: "7+", percentage: 25, co2: 64.79 },
      ],
      selectedOption: "-1",
      average: 2,
      mostPopular: 2,
      groupText: "In the kitchen",
      tipHeading:
        "Running just one less load a week could save 9.26kg Co2 per year. Wait until you have enough washing to fill the machine, to reduce the number of cycles you need",
      tipText: "That's equivalent to charging a smartphone 1185 times!",
      image: "/images/in the kitchen.svg",
    },
    {
      id: "5",
      text:
        "And once those clothes are all clean, if you use a tumble dryer tell us how often that is a week?",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 25, co2: 166.92 },
        { id: "3", text: "4 - 6", percentage: 25, co2: 333.84 },
        { id: "4", text: "7+", percentage: 25, co2: 389.48 },
      ],
      selectedOption: "-1",
      average: 2.5,
      mostPopular: 3,
      groupText: "In the kitchen",
      tipHeading:
        "Likewise running just one less cycle per week could save 55.86kg Co2 per year. Try to hang clothes outside to dry, to reduce the number of cycles you need",
      tipText: "That's equivalent to burning through 61.5 lbs of coal!",
      image: "/images/in the kitchen.svg",
    },
    {
      id: "6",
      text:
        "You're rockin' some nice wheels man, how many miles are you clocking up per week? (We mean car btw)",
      options: [
        { id: "1", text: "don't drive", percentage: 20, co2: 0 },
        { id: "2", text: "< 43", percentage: 20, co2: 903.34 },
        { id: "3", text: "43 - 77", percentage: 20, co2: 1617.62 },
        { id: "4", text: "77 - 196", percentage: 20, co2: 4117.57 },
        { id: "5", text: "196+", percentage: 20, co2: 4138.58 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 4,
      groupText: "What you use",
      tipHeading:
        "Each mile on average creates 404g Co2, thats a whopping 80kg of Co2 a week for some of us, that'll take You'd need around 5.4 acres of mature trees to offset that",
      tipText: "That's equivalent to burning through 61.5 lbs of coal!",
      image: "/images/what you use.svg",
    },
    {
      id: "7",
      text: "This ones a quicky, do you have a heating thermostat?",
      options: [
        { id: "1", text: "yes", percentage: 50, co2: 433 },
        { id: "2", text: "no", percentage: 50, co2: 875 },
      ],
      selectedOption: "-1",
      average: 4.5,
      groupText: "Around the home",
      tipHeading:
        "By reducing your thermostat by just 1 degree can save 433kg Co2 a year! And if you don't have a theromstat well who knows how much you could save!!!",
      tipText:
        "That's the same as driving the safer scenic route from Land’s End to John O’Groats!",
      image: "/images/around the home.svg",
    },
    {
      id: "8",
      text:
        "Nelly said 'It's gettin' hot in here'....but seriously though, how many halogen bulbs does your crib have?",
      options: [
        { id: "1", text: "none", percentage: 20, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 20, co2: 378.0 },
        { id: "3", text: "4 - 6", percentage: 20, co2: 756.0 },
        { id: "4", text: "7 - 9", percentage: 20, co2: 1134.0 },
        { id: "5", text: "10+", percentage: 20, co2: 1260.0 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "Around the home",
      tipHeading:
        "You've felt a halogen bulb right, that heat comes from somewhere, and in return creates 0.345kg of Co2 per bulb for an 8hr day",
      tipText:
        "A coal fired power station would use 172g of coal to power just one bulb",
      image: "/images/around the home.svg",
    },
    {
      id: "9",
      text: "Roughly how may LED bulbs do you have in your home?",
      options: [
        { id: "1", text: "none", percentage: 20, co2: 0 },
        { id: "2", text: "1 - 3", percentage: 20, co2: 66 },
        { id: "3", text: "4 - 6", percentage: 20, co2: 132 },
        { id: "4", text: "7 - 9", percentage: 20, co2: 198 },
        { id: "5", text: "10+", percentage: 20, co2: 220 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "Around the home",
      tipHeading: "You're already smashing it",
      tipText: "No nagging, just a good ol' High 5 for you!",
      image: "/images/around the home.svg",
    },
    {
      id: "10",
      text:
        "How many mobile phones do you have in your household? (it's not an excuse to go check your insta feed!!)",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 3.97 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 7.94 },
        { id: "4", text: "5+", percentage: 25, co2: 9.92 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "Electronics",
      tipHeading:
        "A lot of people leave them charging overnight, but the phone, when plugged in, will still be running background tasks like checking emails, twitter etc.",
      tipText:
        "Stopping the overnight charging could save 2kg of coal per phone, that doesn't include playing candy crush though",
      image: "/images/electronics.svg",
    },
    {
      id: "11",
      text:
        "How many tablets does your household have? We don't mean the prescription kind, they don't count!",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 7.3 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 14.61 },
        { id: "4", text: "5+", percentage: 25, co2: 18.26 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "Electronics",
      tipHeading:
        "These are a classic for overnight charging in lots of households!",
      tipText:
        "Stopping the overnight charging is the same as as 9 miles of average car driving a year",
      image: "/images/electronics.svg",
    },
    {
      id: "12",
      text:
        "How many laptops does your household have? Even if you just take them to coffee shops to look busy!",
      options: [
        { id: "1", text: "none", percentage: 25, co2: 0 },
        { id: "2", text: "1 - 2", percentage: 25, co2: 26.55 },
        { id: "3", text: "3 - 4", percentage: 25, co2: 53.11 },
        { id: "4", text: "5+", percentage: 25, co2: 66.38 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "Electronics",
      tipHeading:
        "Ok, maybe not now we're all home working, but an overnight charge can result in a weighty 13.3kg of wasted Co2 a year",
      tipText:
        "Shut down when not needed, not just lock it or close the lid, you'll not only reduce your Co2 but also your energy bill",
      image: "/images/electronics.svg",
    },
    {
      id: "13",
      text:
        "How often do you remember to turn off the plug once you've finished using something? (1 = Errr NEVER! 10 = Everytime without fail obvs)",
      options: [
        { id: "1", text: "1", percentage: 10, co2: 157.58 },
        { id: "2", text: "2", percentage: 10, co2: 140.08 },
        { id: "3", text: "3", percentage: 10, co2: 122.57 },
        { id: "4", text: "4", percentage: 10, co2: 105.06 },
        { id: "5", text: "5", percentage: 10, co2: 87.55 },
        { id: "6", text: "6", percentage: 10, co2: 70.04 },
        { id: "7", text: "7", percentage: 10, co2: 52.53 },
        { id: "8", text: "8", percentage: 10, co2: 35.02 },
        { id: "9", text: "9", percentage: 10, co2: 17.51 },
        { id: "10", text: "10", percentage: 10, co2: 0 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "What you use",
      tipHeading:
        "Did you know the average household wastes £80 each year through leaving appliances on standby",
      tipText:
        "Turning off appliances when not in use could save 346kg Co2 per year, that's the same amount of carbon that 16 trees absorb in a year!",
      image: "/images/what you use.svg",
    },
    {
      id: "14",
      text:
        "How many portions of food would you throw away a week? (Lets say a portion is 1 average UK meal....not one of those big USA feeds!)",
      options: [
        { id: "1", text: "1", percentage: 10, co2: 0 },
        { id: "2", text: "2", percentage: 10, co2: 3.87 },
        { id: "3", text: "3", percentage: 10, co2: 7.74 },
        { id: "4", text: "4", percentage: 10, co2: 11.61 },
        { id: "5", text: "5", percentage: 10, co2: 15.48 },
        { id: "6", text: "6", percentage: 10, co2: 19.36 },
        { id: "7", text: "7", percentage: 10, co2: 23.23 },
        { id: "8", text: "8", percentage: 10, co2: 27.1 },
        { id: "9", text: "9", percentage: 10, co2: 30.97 },
        { id: "10", text: "10", percentage: 10, co2: 34.84 },
      ],
      selectedOption: "-1",
      average: 4.5,
      mostPopular: 3,
      groupText: "In the kitchen",
      tipHeading:
        "A bit harder to calculate, but if each meal was averaged it'd work out to be 70g of Co2 wasted, not to mention the waste of good food",
      tipText:
        "Try being more creative and use those items before the spoil, with great resources online it's never been easier to try your culinary skills",
      image: "/images/in the kitchen.svg",
    },
  ],
};

export default AppState;
