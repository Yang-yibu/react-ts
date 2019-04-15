import React from 'react';
import Navigation from '../../../components/navigation/navigation.jsx';
import request from "../../../utils/SafeRequest.js";

console.log('pages-list: ', 2);
// list 注释
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: null};
  }

  componentDidMount () {
    let result = request('/test/page', {id: 1});
    result.then((res) => {
      console.log('data: ', res);
      this.setState({ name: res.data })
    })
  }

  render() {
    return (
      <>
        <Navigation name={ this.state.name } />
        <h1>Hello List</h1>
        <p>今天是：{this.state.date.toLocaleTimeString()}</p>
      </>
    );
  }
}
