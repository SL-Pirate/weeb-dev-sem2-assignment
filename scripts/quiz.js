const quizData = [
    {
      question: "What is the nickname of Sigiriya?",
      options: ["Lion's Rock", "Dambulla Cave", "Buddhist Monastry", "Rock Fortress"],
      answer: "Lion's Rock"
    }, 
    {
      question: "",
      options: [""],
      answer: ""
    },
    {
      question: "",
      options: [""],
      answer: ""
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
  
  function showResults() {
    questionEl.textContent = `You scored ${score} out of ${quizData.length} questions.`;
    optionsEl.innerHTML = '';
    submitBtn.style.display = 'none';
  }
  
  loadQuestion();
  submitBtn.addEventListener('click', submitAnswer);
  