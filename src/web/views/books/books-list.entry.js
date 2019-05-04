
'use strict';
import React from 'react';
import ReactDom from 'react-dom';
// import "antd/dist/antd.css";

import List from './pages/list.tsx';
// booksEntry 注释
console.log('books-list.entry: ', 1111);
ReactDom.render(<List />, document.getElementById('app'));
