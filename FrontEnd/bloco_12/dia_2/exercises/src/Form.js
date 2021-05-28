import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      sobreMim: '',
      nome: '',
      select: 'hello',
      idade: 0,
      check: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <fieldset>
            <legend>Mensagem de Texto</legend>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você
              decide! =)
              <textarea
                name="sobreMim"
                value={this.state.sobreMim}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Informações pessoais</legend>
            <label>
              Nome:
              <input type="text" name="nome" onChange={this.handleChange} />
            </label>
            <label>
              Idade:
              <input type="number" name="idade" onChange={this.handleChange} />
            </label>
          </fieldset>
          <label>
            Checkbox:
            <input type="checkbox" name="check" onChange={this.handleChange} />
          </label>
          <input type="file" />
        </form>
      </div>
    );
  }
}
