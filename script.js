let isPlaying = false;
let score;
let time;
let correctAnswer;

document.getElementById('game-button').onclick = function(){
  if (isPlaying) {
    location.reload();
  } else {
    isPlaying = true;
    score = 0;
    time = 120;
    document.getElementById('score').innerText = score;
    show('time');
    document.getElementById('game-button').innerText = 'Reset game';
    document.getElementById('timeValue').innerText = time;
    hide('gameOver');
    document.getElementById('answer1').style.cursor = 'pointer';
      document.getElementById('answer2').style.cursor = 'pointer';
      document.getElementById('answer3').style.cursor = 'pointer';
      document.getElementById('answer4').style.cursor = 'pointer';
      hide('gameOver');
      show('question');
      document.getElementById('answers').style.display = 'grid';
    startTime();
    newQuestion();
  }
}
for(var i=1; i<5; i++) {
  document.getElementById('answer'+i).onclick = function() {
  if (this.innerHTML == correctAnswer) {
    score++;
    document.getElementById('score').innerText = score;
    show("game-answer_info");
    document.getElementById("game-answer_info").style.color = 'green';
    document.getElementById("game-answer_info").innerText = 'Correct!';
    setTimeout(function() {
      hide('game-answer_info')
    }, 500);
    newQuestion();

  } else {
    show("game-answer_info");
    document.getElementById("game-answer_info").style.color = 'red';
    document.getElementById("game-answer_info").innerText = 'Wrong!';
    setTimeout(function() {
      hide('game-answer_info')
    }, 500);
    newQuestion();
  }
}
}




function startTime() {
  action = setInterval(function() {
    time--;
    document.getElementById('timeValue').innerText = time;
    if (time == 0) {
      stopTime();
      show('gameOver');
      hide('question');
      hide('answers');
      document.querySelector('#gameOver p span').innerText = score;
      hide('time');
      hide('game-answer_info');
      document.getElementById('game-button').innerText = 'Start game';
      isPlaying = false;
    }
  }, 1000)
}

function stopTime() {
  clearInterval(action);
}
function show(el) {
  document.getElementById(el).style.display = 'block'
}
function hide(el) {
  document.getElementById(el).style.display = 'none'
}
function newQuestion() {
  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);
  correctAnswer = num1+num2;
  document.getElementById('question').innerHTML = `${num1} + ${num2} = ?`;
  let correctAnswerPosition = Math.floor(Math.random() * 3 + 1);
  document.getElementById('answer'+correctAnswerPosition).innerText = correctAnswer;

  for(var i=1; i<5; i++) {
    if (i !== correctAnswerPosition) {
      let wrongAnswer = (Math.floor(Math.random() * 10 + 1)) + (Math.floor(Math.random() * 10 + 1));

    document.getElementById('answer'+i).innerText = wrongAnswer;
    console.log(wrongAnswer)
    }
    
  }
}