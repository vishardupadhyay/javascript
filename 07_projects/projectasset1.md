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