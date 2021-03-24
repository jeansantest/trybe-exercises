let pessoaCandidata = "lista";

switch (pessoaCandidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovado(a)");
    break;

  case "reprovada":
    console.log("Você foi reprovado");
    break;
    
  case "lista":
    console.log("Você está na nossa lista de espera")
    break;

  default:
    console.log("Não se aplica")  
}