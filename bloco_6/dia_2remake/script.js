const selectState = document.getElementById("select-state");
const arrayAbreviation = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
const buttonSendId = document.querySelector("#submit-button");

function createOptionStates() {
  for (let index = 0; index < arrayAbreviation.length; index += 1) {
    const optionCreation = document.createElement("option");
    selectState.appendChild(optionCreation).innerText = arrayAbreviation[index];
    selectState.appendChild(optionCreation).value = arrayAbreviation[index];
  }
}
createOptionStates();

document.getElementById('date-input').DatePickerX.init({
  format: 'dd/mm/yyyy'
});

new window.JustValidate('.js-form', {
  Rules: {
    email: {
        required: true,
        email: true
    },
  },
  focusWrongField: true,
});
