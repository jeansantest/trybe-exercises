window.onload = () => {
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
function addDays(array) {
  let ul = document.querySelector('#days')
  for(let index = 0; index < array.length; index += 1) {
    let daysList = array[index]
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
      ul.appendChild(li);
    }
  }
}
addDays(dezDaysList);

function feriadosBotao(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonId = 'btn-holiday';
  button.innerText = buttonName;
  button.id = buttonId;
  buttonContainer.appendChild(button);
}
feriadosBotao('Feriados');

function clickColorHoliday() {
  let holidayButton = document.querySelector('#btn-holiday');
  let allHoliday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'green';
  holidayButton.addEventListener('click', function () {
    for (let index = 0; index < allHoliday.length; index += 1) {
      if (allHoliday[index].style.backgroundColor === newColor) {
        allHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        allHoliday[index].style.backgroundColor = newColor;
      }
    }
  });
};
clickColorHoliday();

function fridayButton(fridayButton) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonId = 'btn-friday';
  button.innerText = fridayButton;
  button.id = buttonId;
  buttonContainer.appendChild(button);
}
fridayButton('Sexta-feira');

function clickColorFriday() {
  let fridayButton = document.querySelector('#btn-friday');
  let allFriday = document.querySelectorAll('.friday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'green';
  fridayButton.addEventListener('click', () => {
    for(let index = 0; index < allFriday.length; index += 1) {
      if(allFriday[index].style.backgroundColor === newColor) {
        allFriday[index].style.backgroundColor = backgroundColor;
      } else {
        allFriday[index].style.backgroundColor = newColor;
      }
    }
  });
}
clickColorFriday();

function zoomOverOut() {
  let li = document.querySelectorAll('.day');
  for(let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '40px';
    })
    li[index].addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    })
  }
};
zoomOverOut();

function personalizedTask(task) {
  let span = document.createElement('span');
  span.innerText = task;
  let divMyTasks = document.querySelector('.my-tasks');
  divMyTasks.appendChild(span);
};
personalizedTask('tarefa');

function addColorLegend(color) {
  let div = document.createElement('div');
  let divMyTasks = document.querySelector('.my-tasks');
  div.className = 'task';
  div.style.backgroundColor = color;
  divMyTasks.appendChild(div);
};
addColorLegend('green');

function addEventClick() {
  let divTask = document.querySelector('.task');
  
  
  divTask.addEventListener('click', (event) => {
  if (divTask.className === 'task') {
    event.target.classList.add('selected')
  } else {
    event.target.classList.remove('selected')
  }
});
}
addEventClick();

function addLegendColorEvent() {
  let days = document.getElementById('days');
  days.addEventListener('click', (event) => {
    let divSelected = document.querySelector('.selected');
    if (event.target.style.color === divSelected.style.backgroundColor) {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = divSelected.style.backgroundColor;
    }
    });
}
addLegendColorEvent();



}
