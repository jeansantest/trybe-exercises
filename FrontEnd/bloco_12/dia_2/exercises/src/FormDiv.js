import React, { Component } from 'react';

export default class FormDiv extends Component {
  render() {
    const {
      currentState: {
        nome,
        email,
        cpf,
        endereço,
        cidade,
        estados,
        moradia,
        resumo,
        cargo,
        descricaoCargo,
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal:</h3>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {endereço}</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estados}</p>
        <p>Tipo de moradia: {moradia}</p>
        <h3>Currículo</h3>
        <p>Resumo do currículo: {resumo}</p>
        <p>Cargo: {cargo}</p>
        <p>Descrição do cargo: {descricaoCargo}</p>
      </div>
    );
  }
}
