const selectState = document.getElementById('select-state');
const arrayAbreviation = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const dateId = document.getElementById('date');

function createOptionStates() {
  for (let index = 0; index < arrayAbreviation.length; index += 1) {
    const optionCreation = document.createElement('option');
    selectState.appendChild(optionCreation).innerText = arrayAbreviation[index];
    selectState.appendChild(optionCreation).value = arrayAbreviation[index];
  }
}
createOptionStates()

function validateDate(date) {
  if (date.indexOf('/') === 2 || date.indexOf('/') === 5) {
    const day = date.substr(0, 2); console.log(day);
    const month = date.substr(3, 2); console.log(month);
    const year = date.substr(6,4); console.log(year);
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 1900 && year <= 2021) {
      console.log(date); return date; 
    }
  }
}
validateDate('20/12/1901')
/* https://pt.stackoverflow.com/questions/9121/como-verificar-se-existem-n%C3%BAmeros-dentro-de-um-input-com-javascript */
/* https://ricardo-reis.medium.com/indexof-a41b97832253 */
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr */

