import React, { Component } from 'react';
import FormDiv from './FormDiv';

const states = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

const reset = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  estados: '',
  resumo: '',
  moradia: '',
  cargo: '',
  descricaoCargo: '',
  showAlert: true,
  submitted: false,
};
export default class Form2 extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estados: '',
      resumo: '',
      moradia: '',
      cargo: '',
      descricaoCargo: '',
      showAlert: true,
      submitted: false,
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

  handleBlur({ target }) {
    let { name, value } = target;
    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;
    this.setState({
      [name]: value,
    });
  }

  handleMouseEnter() {
    if (this.state.showAlert === true) {
      alert('Preencha com cuidado esta informação.');
    }
    this.setState({ showAlert: false });
  }

  submit() {
    this.setState({ submitted: true });
  }

  reset() {
    this.setState(reset);
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
              onBlur={this.handleBlur}
              value={this.state.cidade}
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
            <label>
              Resumo de currículo
              <textarea
                name="resumo"
                maxLength="1000"
                required
                onChange={this.handleChange}
              ></textarea>
            </label>
            <label>
              Cargo
              <input
                type="text"
                name="cargo"
                maxLength="40"
                required
                onChange={this.handleChange}
                onMouseEnter={this.handleMouseEnter}
              />
            </label>
            <label>
              Descrição do cargo
              <textarea
                name="descricaoCargo"
                maxLength="500"
                required
                onChange={this.handleChange}
              ></textarea>
            </label>
          </fieldset>
          <input type="submit" value="Submit" onClick={this.submit} />
          <input type="reset" value="Reset" onClick={this.reset} />
        </form>
        {this.state.submitted && <FormDiv currentState={this.state} />}
      </div>
    );
  }
}
