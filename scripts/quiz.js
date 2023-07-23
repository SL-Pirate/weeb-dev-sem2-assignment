const quizData = [
    {
      question: "What is the nickname of Sigiriya?",
      options: ["Lion's Rock", "Dambulla Cave", "Buddhist Monastry", "Rock Fortress"],
      answer: "Lion's Rock"
    }, 
    {
      question: " Galle is a city located in which country?",
      options: ["India","Sri Lanka","Thailand","Malaysia"],
      answer: "Sri Lanka"
    },
    {
      question: "Galle is famous for its well-preserved ________.",
      options: ["Temples","Beaches","Fort","Waterfalls"],
      answer: "Fort"
    },
    {
      question: "Which ancient Sri Lankan king is credited with founding Anuradhapura as the capital?",
      options: [" King Parakramabahu I","King Dutugamunu","King Devanampiya Tissa"," King Vijaya"],
      answer:"King Devanampiya Tissa"
    },
    {
      question:"What is the meaning of the name Sinharaja?",
      options:["Forest of Serenity","Lion's Kingdom"," Land of Tigers","Kingdom of Birds"],
      answer :"Lion's Kingdom"
    },
    {
      question:"What happened to King Kasyapa I after his defeat in the battle at Sigiriya?",
      options:["He was captured and imprisoned for life.","He fled to India and sought asylum with another king.","He committed suicide by jumping from the top of the fortress."," He embraced Buddhism and became a monk."],
      answer: "He committed suicide by jumping from the top of the fortress."
    },
    {
      question:"What is the UNESCO World Heritage status of Anuradhapura, Sri Lanka?",
      options:[" Natural Heritage Site"," Intangible Cultural Heritage Site","Cultural Heritage Site","Mixed Heritage Site"],
      answer: "Cultural Heritage Site"
    },
    {
      question:"When was Galle Fort recognized as a UNESCO World Heritage Site?",
      options:["17th century"," 19th century","20th century","21st Century"],
      answer: "20th century"
    },
    {
      question:"What is the approximate total vegetation density in Sinharaja Forest per hectare?",
      options:[" 24,000 individuals"," 120,000 individuals","240,000 individuals","480,000 individuals"],
      answer:"240,000 individuals"
    },
    {
      question:"What is the significance of the Mirror Wall at Sigiriya Lions Rock?",
      options:[ "It was used to reflect the surrounding natural scenery for the enjoyment of the king."," It was a defensive barrier built to protect the Sigiriya fortress from invaders."," It was a wall where the ancient king would perform rituals and ceremonies.","It was polished so heavily that the king could see his reflection, and visitors left inscriptions on it dating back to the 8th century."],
      answer:"It was polished so heavily that the king could see his reflection, and visitors left inscriptions on it dating back to the 8th century."
    }
  ];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const submitBtn = document.getElementById('submit-btn');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = '';
  
    currentQuizData.options.forEach((option) => {
      const radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = 'answer';
      radioBtn.value = option;
      optionsEl.appendChild(radioBtn);
  
      const label = document.createElement('label');
      label.textContent = option;
      optionsEl.appendChild(label);
    });
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
  
    if (!selectedOption) {
      return;
    }
  
    const answer = selectedOption.value;
  
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
  
    selectedOption.checked = false;
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  let isOver = false;
  function showResults() {
    if (!isOver) {
      questionEl.textContent = `You scored ${score} out of ${quizData.length} questions.`;
      optionsEl.innerHTML = '';
      submitBtn.style.display = 'none';
      
      showPerformanceDetails();
      isOver = true;
    }
  }
  
  loadQuestion();
  submitBtn.addEventListener('click', submitAnswer);
  
  let timerValue = 0;
  let totalTime = 0;
  function startCountdown(duration) {
    timerValue = duration;
    totalTime = duration;
    let timerDisplay = document.getElementById('countdown');

    let timer = setInterval(function() {
      if (timerValue <= 0) {
        clearInterval(timer);
        if (!isOver) {
          document.getElementById('quiz-container').innerHTML = '<h2>Time is up!</h2>';
        }
        showResults();
      } else {
        let minutes = Math.floor(timerValue / 60);
        let seconds = timerValue % 60;
        timerDisplay.innerHTML = 'Time left: ' + minutes + 'm ' + seconds + 's';
      }
      timerValue--;
    }, 1000);
  }

  
  function showPerformanceDetails() {
    let performanceDetails = document.getElementById('performance-details');
    let questionCount = quizData.length;
    let correctAnswers = score;
    let wrongAnswers = questionCount-correctAnswers;
    let gradePercentage = (correctAnswers / questionCount) * 100;
    let timeTaken = totalTime - timerValue;
    console.log(timeTaken);
    timerValue = 0;

    document.getElementById('question-count').innerText = 'Total Questions: ' + questionCount;
    document.getElementById('correct-answers').innerText = 'Correct Answers: ' + correctAnswers;
    document.getElementById('wrong-answers').innerText = 'Wrong Answers: ' + wrongAnswers;
    document.getElementById('grade-percentage').innerText = 'Grade Percentage: ' + gradePercentage + '%';
    document.getElementById('time-taken').innerText = 'Time Taken: ' + timeTaken + ' seconds';

    performanceDetails.style.display = 'block';
  }


  window.onload = function() {
    startCountdown(quizData.length * 10);
  };