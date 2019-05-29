(function() {
  function buildQuiz() {
    // to store the HTML output
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // for each question this stores the list of answer choices
      const answers = [];

      for (letter in currentQuestion.answers) {
        // or each answer add an HTML radio button
        // a radio button makes sure that the user chooses only one of the given multiple choice answer
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
    // this combies the ouput into HTML and displays it
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        // if the answer chosen is correct it will add to the number of correct answers
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
        // if the answer is correct it will appear green
      } else {
        answerContainers[questionNumber].style.color = "red";
        // if answer is wrong or blank the color will be red
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What is Tibet?",
      answers: {
        a: "a country",
        b: "a plateau",
        c: "a creation",
        d: "a place on mars",
      },
      correctAnswer: "b",
    },
    {
      question: "Where is Tibet?",
      answers: {
        a: "South Asia",
        b: "East Asia",
        c: "Africa",
        d: "On Mars",
      },
      correctAnswer: "a",
    },
    {
      question: "What are the 3 regions in Tibet",
      answers: {
        a: "Lhasa, Amdo, Kham",
        b: "Lhasa, Bhutan, Kham",
        c: "U-Tsang, Amdo, Kham",
        d: "U-Tsang, Bhutan, Nepal",
      },
      correctAnswer: "c",
    },
    {
      question: "Why is Tibet not a country anymore?",
      answers: {
        a: "They signed an agreement under the Mongolian government",
        b: "Communist China invaded Tibet in 1959",
        c: "Trump allied with North Korea to take over",
        d: "An earthquake in 1959 caused the people to flee to Nepal and India",
      },
      correctAnswer: "b",
    },
    {
      question: "What countries did the Tibetans flee to",
      answers: {
        a: "Korea and Japan",
        b: "Korea and Nepal",
        c: "Nepal and India",
        d: "Nepal and America",
      },
      correctAnswer: "c",
    },
    {
      question: "What are the results of the genocide on Tibetans?"
      answers: {
        a: "Tibetans are lighting themselves on fire",
        b: "Tibetans are bombing Chinese headquarters",
        c: "Tibetans are invading small regions in China",
        d: "Tibetans are coming to America and leaving their land behind",
      },
      correctAnswer: "a",
    },
    {
      question: "Who is Tibet's spirtual leader?",
      answers: {
        a: "Barack Obama",
        b: "Panchen Lama",
        c: "Dalai Lama",
        d: "Mrs. Tanzosh",
      },
      correctAnswer: "c",
      },
    {
      question: "When was the Panchen Lama kidnapped?",
      answers: {
        a: "November 29, 1995",
        b: "September 11, 2001",
        c: "June 5, 1980",
        d: "December 12, 2002",
      },
      correctAnswer: "a",
    },
    {
      question: "What is a popular Tibetan song",
      answers: {
        a: "Yeshi Norbu",
        b: "Sakuranbo",
        c: "Old Town Road",
        d: "Azonto",
      },
      correctAnswer: "a,
    },
    {
      question: "Who is Tibetan in the video?",
      answers: {
        a: "Doreen only",
        b: "Doreen and Eve",
        c: "Lodoe only",
        d: "Doreen and Lodoe",
      },
      correctAnswer: "d",
    },
  ];
  buildQuiz();

  submitButton.addEventListener("click", showResults);
  // when user clicks submit, their results are shown
})();
