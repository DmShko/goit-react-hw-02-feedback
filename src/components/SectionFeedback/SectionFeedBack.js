import React, { Component } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { NotificationFB } from '../NotificationFB/NotificationFB';

import scn from '../SectionFeedback/SectionFeedBack.module.css';

export class SectionFeedBack extends Component {

  // create local 'state' with key of change 'Statistics' to 'FeedbackOptions'
  state = {
    lock: false,
  };

  // change 'Statistics' to 'FeedbackOptions' key method
  onStatistic = () => this.setState({ lock: true });

  // counting the amount of feedback
  countTotalFeedback = () =>
    this.props.dataState.good +
    this.props.dataState.neutral +
    this.props.dataState.bad;

  // counting the percent of 'good' feedback
  countPositiveFeedbackPercentage = () =>
    Math.round((this.props.dataState.good * 100) / this.countTotalFeedback()) ||
    0;

  render() {
    
    const { good, neutral, bad } = this.props.dataState;

    return (
      <section className={scn.section}>
        <p className={scn.title}>{this.props.title}</p>

        <FeedbackOptions 
          options={this.props.linkState}
          onLeaveFeedback={this.onStatistic}
          optionsName={this.props.dataState}
        />

        <p className={scn.title}>Statistics</p>

        {this.state.lock ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationFB message="There is no feedback" />
        )}
      </section>
    );
  }
}
