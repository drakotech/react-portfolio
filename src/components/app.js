import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./porfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>George Flefel Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
