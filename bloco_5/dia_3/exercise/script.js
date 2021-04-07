function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function addDays() {
  let ul = document.querySelector('#days')
  for(let index = 0; index < dezDaysList.length; index += 1) {
    let daysList = dezDaysList[index]
    let li = document.createElement('li')
    if (daysList === 24 || daysList === 31) {
      li.className = 'day holiday';
      li.innerText = daysList;
      ul.appendChild(li);
    } else if (daysList === 4 || daysList === 11 || daysList === 18) {
      li.className = 'day friday';
      li.innerText = daysList;
      ul.appendChild(li);
    } else if (daysList === 25) {
      li.className = 'day holiday friday'
      li.innerText = daysList;
      ul.appendChild(li);
    } else {
      li.className = 'day';
      li.innerText = daysList;
      ul.appendChild(li)
    }
  }
}
addDays()

function feriadosBotao(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container')
  let button = document.createElement('button');
  let buttonId = 'btn-holiday'
  button.innerText = buttonName
  button.id = buttonId
  buttonContainer.appendChild(button)
}
feriadosBotao('Feriados')

function clickColor() {
  let holidayButton = document.querySelector('#btn-holiday')
  let allHoliday = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)'
  let newColor = 'green'
  holidayButton.addEventListener('click', function () {
    for (let index = 0; index < allHoliday.length; index += 1) {
      if (allHoliday[index].style.backgroundColor === newColor) {
        allHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        allHoliday[index].style.backgroundColor = newColor;
      }
    }
  })
};
clickColor();