import React, { Component } from "react";

export class FeedbackOptions extends Component {

    state = this.props.options;

    // handler method by button 'Good'
    goodButtonClick = () => this.setState(value => ({good: value.good + 1,}));

    // handler method by button 'Neutral'
    neutralButtonClick = () => this.setState(value => ({neutral: value.neutral + 1,}));

    // handler method by button 'Bad'
    badButtonClick = () => this.setState(value => ({bad: value.bad + 1,}));

    render() {
        
        const { good, neutral, bad } =  this.state;
      
        return (
            
            <>
                {
                    good || neutral || bad ? this.props.onLeaveFeedback(): this.props.onLeaveFeedback()
                }
                <button onClick={this.goodButtonClick}>Good</button>
                <button onClick={this.neutralButtonClick}>Neutral</button>
                <button onClick={this.badButtonClick}>Bad</button>

            </>
        )  
    }
}