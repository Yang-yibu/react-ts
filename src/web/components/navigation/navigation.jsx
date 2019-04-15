import React from 'react';
import './navigation.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="container">我是 Nav { this.props.name }</div>
      </div>
    );
  }
}
