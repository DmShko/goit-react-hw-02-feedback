import React, { Component } from 'react';

import { SectionFeedBack } from './components/SectionFeedback/SectionFeedBack';

export class App extends Component {
  // old school variant
  // constructor(){
  //     super();
  //     this.state = {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0
  //     };
  // }

  // with 'babel'
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // change data in state method if any button click
  // dynemic fint and change property of 'state'
  changeState = data =>
    this.setState(value => ({
      [data]: value[data] + 1,
    }));

  render() {
    return <SectionFeedBack title="Please, leave feedback" linkState={this.changeState} dataState={this.state}/>;
  }
}
