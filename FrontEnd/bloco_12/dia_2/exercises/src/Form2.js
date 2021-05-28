import React, { Component } from 'react';

const states = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];
export default class Form2 extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estados: '',
      resumo: '',
      moradia: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário de cadastro de currículo</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informações pessoais</legend>
            <input
              type="text"
              name="nome"
              maxLength="40"
              onChange={this.handleChange}
              value={this.state.nome.toUpperCase()}
              placeholder="Nome aqui"
              required
            />
            <input
              type="text"
              name="email"
              maxLength="50"
              onChange={this.handleChange}
              placeholder="Email aqui"
              required
            />
            <input
              type="text"
              name="cpf"
              maxLength="11"
              onChange={this.handleChange}
              placeholder="CPF aqui"
              required
            />
            <input
              type="text"
              name="endereço"
              maxLength="200"
              onChange={this.handleChange}
              value={this.state.endereço.replace(/[^\w\s]/gi, '')}
              placeholder="Endereço aqui"
              required
            />
            <input
              type="text"
              name="cidade"
              maxLength="28"
              onChange={this.handleChange}
              value={this.state.cidade.match(/^\d/) ? '' : this.state.cidade}
              placeholder="Cidade aqui"
              required
            />
            <select
              name="estados"
              required
              onChange={this.handleChange}
              defaultValue=""
            >
              <option>Selecione algum estado</option>
              {states.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <label htmlFor="house">
              <input
                type="radio"
                id="house"
                name="moradia"
                value="house"
                onChange={this.handleChange}
              />
              Casa
            </label>
            <label htmlFor="apart">
              <input
                type="radio"
                id="apart"
                name="moradia"
                value="apartment"
                onChange={this.handleChange}
              />
              Apartamento
            </label>
          </fieldset>
          <fieldset>
            <legend>Dados do último emprego</legend>
            <textarea
              name="resumo"
              maxLength="1000"
              required
              onChange={this.handleChange}
            ></textarea>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
