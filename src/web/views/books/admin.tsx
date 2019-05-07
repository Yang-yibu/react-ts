import * as React from 'react';
import {Row, Col} from "antd";
import Header from '../../components/navigation';
import NavLeft from '../../components/NavLeft';
import Footer from '../../components/Footer';
import Hello from './pages/Hello';

export default class Admin extends React.Component {
  render () {
    return (
      <Row className="container">
        <Col span={ 3 } className="nav-left">
          <NavLeft />
        </Col>
        <Col span={ 21 } className="main">
          <Header />
          <Row className="content">
            <Hello name={'Yi-Bu'} />
            {/* { this.props.children } */}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}