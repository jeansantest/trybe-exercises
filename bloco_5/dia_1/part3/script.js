let header = document.querySelector('header')
header.style.backgroundColor = 'green'

let emergencyTasks = document.querySelectorAll('.emergency-tasks')[0]
emergencyTasks.style.backgroundColor = 'pink'
let emergencyH3 = document.querySelectorAll('.emergency-tasks h3');

for(let key of emergencyH3) {
  key.style.backgroundColor = 'magenta'
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks')[0]
noEmergency.style.backgroundColor = 'yellow'
let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
for(let key of noEmergencyH3) {
  key.style.backgroundColor = 'black'
}
