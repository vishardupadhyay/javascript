 # Projects related to DOM

 ## project link

 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 # Solution code

 ## Project 1

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