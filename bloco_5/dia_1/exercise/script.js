document.getElementsByTagName('p')[0].innerText = 'Tanto faz o texto';
let mainContent = document.getElementsByClassName('main-content');
for(let i = 0; i < mainContent.length; i += 1) {
  mainContent[i].style.backgroundColor = 'rgb(76,164,109)'
}
let centerContent = document.getElementsByClassName('center-content');
for(let i = 0; i < centerContent.length; i += 1) {
  centerContent[i].style.backgroundColor = 'white'
}

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'

let paragraph = document.getElementsByTagName('p')[0];
paragraph.innerText = paragraph.innerText.toUpperCase();

let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerText);
  }