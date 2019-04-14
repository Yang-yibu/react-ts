import React from 'react';
import Navigation from '../../../components/navigation/navigation.jsx';


console.log('pages-list: ', 2);
// list 注释
export default class List extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <h1>Hello List</h1>
        <p>My list a</p>
      </>
    );
  }
}
