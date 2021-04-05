let page = document.querySelectorAll('*')
for(let i = 0; i < page.length; i += 1) {
  page[i].style.color = 'black'
}

let emergencyTasks = document.querySelectorAll('.emergency-tasks')
let divEmergency = document.querySelectorAll('section.emergency-tasks div h3')

for(let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = 'pink'
  divEmergency[i].style.backgroundColor = 'magenta'
}
document.divEmergency.style.color = 'red'