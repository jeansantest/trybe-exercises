let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem + '!')

info.recorrente = 'Sim'

console.log(info)

for(let key in info) {
  console.log(key)
}

for(let key in info) {
  console.log(info[key])
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

/*Peguei uma ajuda no gabarito para chegar em uma solução e expliquei o que ocorre em cada código*/
for(let key in info) {
  if(info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim') {
    //se for info.recorrente e a info[key] for 'Sim' e a info2[key] for 'Sim' que retorne o console.log('Ambos recorrentes')
    console.log('Ambos recorrentes');
  } else {
    //senão fizer parte do info.recorrente é para colocar o valor do info ' e ' o valor do info2.
    console.log(info[key] + ' e ' + info2[key])
  }
}

