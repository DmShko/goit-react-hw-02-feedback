import React, { Component } from 'react';

import opt from '../FeedbackOptions/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {

  // change 'Statistics' to 'FeedbackOptions' method
  openState = (data = false) => (data ? this.props.onLeaveFeedback() : 'none');

  buttonClick = (evt) => {
    this.props.options(evt.target.name);
    this.openState(true);
  }

  render() {
  
    const opts = Object.keys(this.props.optionsName) ;
 
    return (
      <>
        <div className={opt.buttonArea}>
          
           { opts.map(value =>{ 
              return <button type="button" className={opt.button} onClick={this.buttonClick} name={value} key={value}>{value}</button>})}
            
        </div>
      </>
    );
  }
}
