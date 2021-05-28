import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeInputNome = this.handleChangeInputNome.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);

    this.state = {
      sobreMim: '',
      nome: '',
      select: 'hello',
      idade: 0,
    };
  }

  handleChangeTextArea(event) {
    this.setState({
      sobreMim: event.target.value,
    });
  }

  handleChangeInputNome(event) {
    this.setState({
      nome: event.target.value,
    });
  }

  handleChangeSelect(event) {
    this.setState({
      select: event.target.value,
    });
  }

  handleChangeAge(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <select value={this.state.select} onChange={this.handleChangeSelect}>
            <option value="hello">hello</option>
            <option value="world">world</option>
          </select>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name="sobre-mim"
              value={this.state.sobreMim}
              onChange={this.handleChangeTextArea}
            />
          </label>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              onChange={this.handleChangeInputNome}
            />
          </label>
          <label>
            Idade:
            <input type="number" name="idade" onChange={this.handleChangeAge} />
          </label>
        </form>
      </div>
    );
  }
}
