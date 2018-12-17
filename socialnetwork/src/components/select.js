import React, { Component, PropTypes } from 'react';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({value:data.value});
  }

  render() {
    return (
        <label>
          <select className="widefat" name={this.props.name} onChange={this.handleChange}>
            <option value="Gustin">Gustin</option>
            <option value="Zezin">Zezin</option>
            <option value="Huguin">Huguin</option>
            <option value="Lucas">Lucas</option>
          </select>
        </label>
    );
  }
}

export default Select;