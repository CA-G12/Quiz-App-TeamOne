// ? Adding the needed html elements.
const questionNum = document.getElementsByClassName("ques-num")[0];
const questionText = document.querySelector(".question");
const firstChoice = document.querySelector(".first-choice"),
  isFirstSelected = firstChoice.querySelector(".class");
const secondChoice = document.querySelector(".second-choice"),
  isSecondSelected = firstChoice.querySelector(".class");
const thirdChoice = document.querySelector(".third-choice"),
  isThirdSelected = firstChoice.querySelector(".class");
const forthChoice = document.querySelector(".forth-choice"),
  isForthSelected = firstChoice.querySelector(".class");

// ? The questions and answers array of objects.

const questionsArray = [
  {
    question:
      "Which of the following is NOT a quote from the 1942 film Casablanca? ",
    answers: [
      "Here's lookin' at you, kid.",
      "Of all the gin joints, in all the towns, in all the world, she walks into mine...",
      "Round up the usual suspects.",
      "Frankly, my dear, I don't give a damn.",
    ],
    correctAns: "Frankly, my dear, I don't give a damn.",
    isDone: false,
  },
  {
    question:
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    answers: ["Dreamgirls", "Cabaret", "All That Jazz", "Chicago"],
    correctAns: "Chicago",
    isDone: false,
  },
  {
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
    answers: ["Strider", "Barliman Butterbur", "Celeborn", "Tom Bombadil"],
    correctAns: "Tom Bombadil",
    isDone: false,
  },
  {
    question:
      "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
    answers: [
      "August 28, 2015",
      "July 20, 2015",
      "January 25, 2015",
      "October 21, 2015",
    ],
    correctAns: "October 21, 2015",
    isDone: false,
  },
  {
    question:
      "What character in the Winnie the Pooh films was added by Disney and does not appear in the original books?",
    answers: ["Tigger", "Heffalumps", "Rabbit", "Gopher"],
    correctAns: "Gopher",
    isDone: false,
  },
  {
    question: "What is the name of the queen's pet in A Bug's Life?",
    answers: ["Flik", "Hopper", "Dot", "Aphie"],
    correctAns: "Aphie",
    isDone: false,
  },
  {
    question:
      "What film did James Cameron's Avatar dethrone as the highest-grossing film ever?",
    answers: ["FlStar Warsik", "Gone with the Wind", "Jaws", "Titanic"],
    correctAns: "Titanic",
    isDone: false,
  },
  {
    question:
      "Which musical artist had a prominent role in the 2017 film 'Kingsman: The Golden Circle'?",
    answers: ["Lady Gaga", "Rihanna", "Justin Bieber", "Elton John"],
    correctAns: "Elton John",
    isDone: false,
  },
  {
    question:
      "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca's roar and R2-D2's beeps and whistles?",
    answers: ["Ken Burns", "Ralph McQuarrie", "Miranda Keyes", "Ben Burtt"],
    correctAns: "Ben Burtt",
    isDone: false,
  },
  {
    question: "What is the birth name of Michael Keaton?",
    answers: [
      "Michael Fox",
      "Michael Richards",
      "Michael Kane",
      "Michael Douglas",
    ],
    correctAns: "Michael Douglas",
    isDone: false,
  },
];
