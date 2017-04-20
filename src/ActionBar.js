import React, { Component } from 'react';
// import R from 'ramda';
// import api from './api';

export default class ActionBar extends Component {

  componentDidMount() {
    // when mount
  }


  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo"/>
        <button className="action-bar__new" onClick={() => this.props.addNewNote() }>+</button>
      </nav>
    );
  }
}
