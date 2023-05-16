const button = document.querySelector('#btn');
const body = document.querySelector('body');
const value = document.querySelector('.hexColor');

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

button.addEventListener('click', changeColor);

function changeColor() {
    let hex = '#';
  
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * hexValues.length)
      hex += hexValues[index];
    }
  
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }

 const color = '#' + Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, '0') 

   