import React, { Component } from "react";

import { SectionFeedBack } from './SectionFeedback/SectionFeedBack'

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
  }

  render(){
    return (
      <SectionFeedBack title="" data={this.state}/>
    )
  }
}
