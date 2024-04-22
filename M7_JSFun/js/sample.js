function checkTrivia() {
  const answer = document.getElementById('triviaAnswer').value.trim();
  const responseElement = document.getElementById('triviaResponse');
  const correctAnswer = "Paris";
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    responseElement.innerText = `Correct! You guessed: ${answer}`;
  } else {
    responseElement.innerText = `Incorrect. You guessed: ${answer}`;
  }
}

function checkNumber() {
  const numInput = document.getElementById('numberInput').value.trim();
  const num = parseInt(numInput);
  if (!isNaN(num) && num >= 10000 && num <= 99999) {
    const isEven = num % 2 === 0;
    document.getElementById('numberResult').innerText = `The number ${num} is ${isEven ? 'even' : 'odd'}`;
  } else {
    document.getElementById('numberResult').innerText = 'Please enter a valid 5-digit number.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const triviaInput = document.getElementById('triviaAnswer');
  triviaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkTrivia();
    }
  });
  const numberInput = document.getElementById('numberInput');
  numberInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkNumber();
    }
  });
});
