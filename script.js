const questions = [ 
  { 
    question: 'Сколько будет 2+2?',
    answer: 4,
    type: 'prompt' 
  },
  {
    question: 'Солнце встает на востоке?',
    answer: true, 
    type: 'confirm' 
  },
  { 
    question: 'Сколько будет 5 / 0?',
    answer: 0, 
    type: 'prompt' 
  }, 
  { 
    question: 'Какого цвета небо?',
    answer: 'голубого',
    type: 'prompt' 
  },
  { 
    question: 'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?' ,
    answer: 42,
    type: 'prompt' 
  }
  ];

let points = 0;
const typeQuestion = question => {
  let type;
  if (question.type === 'prompt') {
  type = prompt;
  } 
  else if (question.type === 'confirm') {
  type = confirm;
  }
  return(type(question.question) == question.answer);
}
function getPoints() {
return questions.forEach(question => {
    if (typeQuestion(question)) {
    points += 10;
    }
  });
}
getPoints();
function showResult(points) {
  alert(`Ваш результат ${points} баллов!`);
}
showResult(points);