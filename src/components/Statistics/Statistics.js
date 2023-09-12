import React, { Component } from 'react';

import st from '../Statistics/Statistics.module.css';

export class Statistics extends Component {
  Total = () => this.props.total();

  PositivPercentage = () => this.props.positivePercentage();

  render() {
    // 'state' property destructuring
    const { good, neutral, bad } = this.props;

    return (
      <>
        <p className={st.lable}>Good: {good}</p>
        <p className={st.lable}>Neutral: {neutral}</p>
        <p className={st.lable}>Bad: {bad}</p>
        <p className={st.lable}>Total: {this.Total()}</p>
        <p className={st.lable}>Positive feedback: {this.PositivPercentage()} %</p>
      </>
    );
  }
}
