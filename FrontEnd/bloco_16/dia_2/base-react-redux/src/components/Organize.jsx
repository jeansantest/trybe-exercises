import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedOrganize } from '../actions';

class Organize extends Component {
  render() {
    const { organize } = this.props;
    return (
      <div>
        <select>
          <option value="all" onClick={organize}>
            All
          </option>
          <option value="completed" onClick={organize}>
            Completed
          </option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  organize: (state) => dispatch(completedOrganize(state.value)),
});

export default connect(null, mapDispatchToProps)(Organize);
