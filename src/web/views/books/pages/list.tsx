import * as React from 'react';
import Navigation from '../../../components/navigation/navigation';
import { Layout, Button } from 'antd';
// import 'antd/lib/layout/style';

import Hello from './demo';

// import request from "../../../utils/SafeRequest";

const {
  Header, Footer, Sider, Content
} = Layout;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: null};
  }

  componentDidMount () {
    // let result = request('/test/page', {id: 1});
    // result.then((res) => {
    //   console.log('data: ', res);
    //   this.setState({ name: res.data })
    // }) 
  }

  render() {
    return (
      <>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Hello name={'Test TSX'} />

            {/* <Navigation name={ this.state.name } /> */}
            <h1>Hello List</h1>
            <p>今天是：{this.state.date.toLocaleTimeString()}</p>

            <Button type="primary">Primary</Button>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </>
    );
  }
}
