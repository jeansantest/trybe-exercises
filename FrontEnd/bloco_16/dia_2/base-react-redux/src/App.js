import React from 'react';
import { connect } from 'react-redux';
import Input from './components/Input';
import { selectedTodo } from './actions';
import './App.css';

class App extends React.Component {
  render() {
    const { todo, selected } = this.props;
    console.log(selected);
    return (
      <div className="App">
        <Input />
        <ol>
          {todo.map((e, i) => (
            <li
              key={i}
              onClick={selected}
              style={e.completed ? { color: 'grey' } : null}
            >
              {e.text}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selected: (state) => dispatch(selectedTodo(state.target.innerText)),
});

const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
