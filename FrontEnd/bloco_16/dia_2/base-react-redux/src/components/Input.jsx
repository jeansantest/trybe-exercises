import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Input extends Component {
  render() {
    return (
      <div>
        <input id="inputTodo" type="text" placeholder="Digite a tarefa" />
        <button>Adicionar</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
