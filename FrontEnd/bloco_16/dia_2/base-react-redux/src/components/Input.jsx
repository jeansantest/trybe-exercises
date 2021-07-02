import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completedTodo } from '../actions';

class Input extends React.Component {
  render() {
    const { submit, completed } = this.props;
    console.log(completed);
    return (
      <div>
        <input id="inputTodo" type="text" placeholder="Digite a tarefa" />
        <button type="button" onClick={submit}>
          Adicionar
        </button>
        <button type="button" onClick={completed}>
          Completed
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  submit: (state) => dispatch(addTodo(state.target.previousSibling.value)),
  completed: (state) => dispatch(completedTodo(state)),
});

export default connect(null, mapDispatchToProps)(Input);
