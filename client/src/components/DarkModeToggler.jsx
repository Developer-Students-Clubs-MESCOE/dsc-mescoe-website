import React, {Component} from 'react';
import {Form} from "react-bootstrap";

class DarkModeToggler extends Component {
  render() {
    return (
      <Form.Check
        checked={this.props.isDarkMode}
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        onChange={this.props.handleThemeSwitch}
        style={{color: this.props.color}}
      />
    );
  }
}

export default DarkModeToggler;