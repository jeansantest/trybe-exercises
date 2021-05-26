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

document.getElementById("date-input").DatePickerX.init({
  format: "dd/mm/yyyy",
});

new window.JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    office: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "O campo de nome é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    email: {
      required: "O campo de email é obrigatório.",
      email: "O email digitado não é válido.",
      maxLength: "O limite é de 50 caracteres.",
    },
    cpf: {
      required: "O campo de CPF é obrigatório.",
      maxLength: "O limite é de 11 caracteres.",
    },
    address: {
      required: "O campo de endereço é obrigatório",
      maxLength: "O limite é de 200 caracteres",
    },
    city: {
      required: "O campo de cidade é obrigatório",
      maxLength: "O limite é de 28 caracteres",
    },
    state: {
      required: "Selecione algum estado",
    },
    radio: {
      required: "Selecione um tipo de imóvel",
    },
    text: {
      required: "O campo de texto é obrigatório",
      maxLength: "O limite é de 1000 caracteres",
    },
    office: {
      required: "O campo de cargo é obrigatório",
      maxLength: "O limite é de 40 caracteres",
    },
    description: {
      required: "O campo de descrição do cargo é obrigatório",
      maxLength: "O limite é de 500 caracteres",
    },
    date: {
      required: "Selecione uma data",
    },
  },
});
