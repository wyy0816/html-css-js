import React, { Component } from 'react';
import ToDoTextInput from './ToDoTextInput';

class Header extends Component {
    render() {
      return (
        <header className="header">
        <h1>todos</h1>
        <ToDoTextInput 
         onSave={this.props.onSave}/>
        </header>
      );
    }
  }
  
  export default Header;
  