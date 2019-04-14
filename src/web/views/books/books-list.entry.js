
'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import List from './pages/list.jsx';
// booksEntry 注释
console.log('books-list.entry: ', 1111);
ReactDom.render(<List />, document.getElementById('app'));
