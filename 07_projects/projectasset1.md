 # Projects related to DOM

 ## project link

 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 # Solution code

 ## Project 1 Solution

 ``` javascript 
    console.log("Vishard")

    let buttons = document.querySelectorAll('.button');

let body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);

  button.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = event.target.id;
        break;
      default:
        body.style.backgroundColor = 'black';
    }
  });
});


 ```

 ## Project 2 Solution

 ``` javascript
 
 let form = document.querySelector('form');

// if height is accessed here, then on load the empty value will be stored in it.
//let height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default action

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);

  let results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please add valid height.';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please add valid weight.';
  } else {
    let result = (weight / ((height * height) / 10000)).toFixed(2);

    let message = printMessage(result);

    results.innerHTML = `<span>${result}</span>
    <p>${message}</p>
    `;
  }
});

function printMessage(result) {
  let message = '';

  let floatResult = parseFloat(result);

  if (floatResult < 18.6) {
    message = 'kha le bhai kuch.';
  } else if (floatResult >= 18.6 && floatResult <= 24.9) {
    message = 'fit hai bhai';
  } else {
    message = 'suar';
  }

  return message;
}


 ```

 # Project 3 Solution

 ``` javascript code 
 
 let time = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  time.innerHTML = date.toLocaleTimeString();
}, 1000);
 
 ```

 # Project 4 Solution

 ```javascript code

let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // will be used to store the user guesses.
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault();

    let guess = parseInt(userInput.value);
    validateTheGuess(guess);
  });
}

function validateTheGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
    userInput.value = '';
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
    userInput.value = '';
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
    userInput.value = '';
  } else {
    prevGuess.push(guess);

    if (numberOfGuesses > 10) {
      displayGuess(guess);
      displayTheMessage(`Game over. Random number was ${randomNumber}`);
      endTheGame();
    } else {
      displayGuess(guess);
      checkTheGuess(guess);
    }
  }
}

function checkTheGuess(guess) {
  if (guess === randomNumber) {
    displayTheMessage(`Yay ! You guessed it right.`);
    endTheGame();
  } else if (guess < randomNumber) {
    displayTheMessage(`Number is too low.`);
  } else if (guess > randomNumber) {
    displayTheMessage(`Number is too high.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numberOfGuesses++;
  remaining.innerHTML = `${11 - numberOfGuesses}`;
}

function displayTheMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function startNewGame() {
  let startNewGame = document.querySelector('#newGame');
  startNewGame.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}

function endTheGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startNewGame();
}


 ```

  # Project 5 Solution

  ``` javascript 
  
  let insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Key Code </th>
          <th>Code</th>
        </tr>
        <tr>
          <th>${event.key === ' ' ? 'Space' : event.key}</th>
          <th>${event.keyCode}</th>
          <th>${event.code}</th>
        </tr>
      </table>
    </div>
  `;
});


  ```
  # Project 6 Solution

  ``` javascript
  // Generate a random color

let randomColor = () => {
  const hexValues = '0123456789ABCDEF';

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const changeTheColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', changeTheColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


  ```