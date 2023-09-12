import React, { Component } from 'react';

import opt from '../FeedbackOptions/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {

  // change 'Statistics' to 'FeedbackOptions' method
  openState = (data = false) => (data ? this.props.onLeaveFeedback() : 'none');

  // handler method by button 'Good'
  goodButtonClick = () => {
   
    this.props.options('good');
    this.openState(true);
  };

  // handler method by button 'Neutral'
  neutralButtonClick = () => {
    
    this.props.options('neutral');
    this.openState(true);
  };

  // handler method by button 'Bad'
  badButtonClick = () => {
    
    this.props.options('bad');
    this.openState(true);
  };

  render() {
    return (
      <>
        <div className={opt.buttonArea}>
            <button className={opt.button} onClick={this.goodButtonClick}>Good</button>
            <button className={opt.button} onClick={this.neutralButtonClick}>Neutral</button>
            <button className={opt.button} onClick={this.badButtonClick}>Bad</button>
        </div>
      </>
    );
  }
}
