{/* <div class="navigation">
  <div class="container">
    <a href="/list">新闻列表</a>
    <a href="/add">添加新闻</a>
  </div>
</div> */}

import React from 'react';
import './navigation.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="container">我是 Nav</div>
      </div>
    );
  }
}