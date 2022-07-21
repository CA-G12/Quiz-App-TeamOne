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
const nextButton = document.querySelector(".next");
const quesContent = document.querySelector(".questions-content");

// ? The questions and answers array of objects.

const questionsArray = [
  {
    id: 1,
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
    id: 2,
    question:
      "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
    answers: ["Dreamgirls", "Cabaret", "All That Jazz", "Chicago"],
    correctAns: "Chicago",
    isDone: false,
  },
  {
    id: 3,
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
    answers: ["Strider", "Barliman Butterbur", "Celeborn", "Tom Bombadil"],
    correctAns: "Tom Bombadil",
    isDone: false,
  },
  {
    id: 4,
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
    id: 5,
    question:
      "What character in the Winnie the Pooh films was added by Disney and does not appear in the original books?",
    answers: ["Tigger", "Heffalumps", "Rabbit", "Gopher"],
    correctAns: "Gopher",
    isDone: false,
  },
  {
    id: 6,
    question: "What is the name of the queen's pet in A Bug's Life?",
    answers: ["Flik", "Hopper", "Dot", "Aphie"],
    correctAns: "Aphie",
    isDone: false,
  },
  {
    id: 7,
    question:
      "What film did James Cameron's Avatar dethrone as the highest-grossing film ever?",
    answers: ["FlStar Warsik", "Gone with the Wind", "Jaws", "Titanic"],
    correctAns: "Titanic",
    isDone: false,
  },
  {
    id: 8,
    question:
      "Which musical artist had a prominent role in the 2017 film 'Kingsman: The Golden Circle'?",
    answers: ["Lady Gaga", "Rihanna", "Justin Bieber", "Elton John"],
    correctAns: "Elton John",
    isDone: false,
  },
  {
    id: 9,
    question:
      "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca's roar and R2-D2's beeps and whistles?",
    answers: ["Ken Burns", "Ralph McQuarrie", "Miranda Keyes", "Ben Burtt"],
    correctAns: "Ben Burtt",
    isDone: false,
  },
  {
    id: 10,
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

let count = 1;
const correctAns = [];
let isDone = false;

function renderQuestions() {
  for (let i = 0; i < questionsArray.length; i++) {
    const getRandomNum = Math.floor(Math.random() * questionsArray.length);
    if (questionsArray[getRandomNum].isDone === false) {
      questionText.textContent = questionsArray[getRandomNum].question;
      questionNum.textContent = count;
      firstChoice.textContent = "";
      secondChoice.textContent = "";
      thirdChoice.textContent = "";
      forthChoice.textContent = "";
      firstChoice.append(questionsArray[getRandomNum].answers[0]);
      secondChoice.append(questionsArray[getRandomNum].answers[1]);
      thirdChoice.append(questionsArray[getRandomNum].answers[2]);
      forthChoice.append(questionsArray[getRandomNum].answers[3]);
      correctAns.push(questionsArray[getRandomNum].answers[3]);
      questionsArray[getRandomNum].isDone = true;
      count++;
      break;
    }
  }
  isDone = questionsArray.every((obj) => obj.isDone === true);
  if (isDone == true) {
    nextButton.textContent = "Show Answers";
    evaluate();
  }
}
renderQuestions();

nextButton.addEventListener("click", renderQuestions);

const answersArr = [];

quesContent.addEventListener("click", (e) => {
  if (e.target.localName === "label") {
    answersArr.push(e.target.textContent);
  }
});

(function addToLocalStorage() {
  window.localStorage.setItem(
    "Questions and Answers",
    JSON.stringify(questionsArray)
  );
})();

let result = 0;

function evaluate() {
  correctAns.forEach((ele, ind) => {
    if (ele === answersArr[ind]) {
      result++;
    }
  });
  console.log(result);
}

