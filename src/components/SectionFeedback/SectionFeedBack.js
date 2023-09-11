import React, { Component } from "react";

import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics"
import { NotificationFB } from "../NotificationFB/NotificationFB"

export class SectionFeedBack extends Component {

    lock = false;

    onStatistic = () => !this.lock;

    // counting the amount of feedback
    countTotalFeedback = () => {
            
        return this.props.data.good + this.props.data.neutral + this.props.data.bad;
    };
        
    // counting the percent of 'good' feedback
    countPositiveFeedbackPercentage = () => {

    return Math.round((this.props.data.good * 100 ) / this.countTotalFeedback()) || 0;
};


    render() {

        const { good, neutral, bad } =  this.props.data;
       
        return(
            
                <section>
                    
                    <p>Please, leave feedback</p>

                    <FeedbackOptions options={this.props.data} onLeaveFeedback={this.onStatistic}/>

                    <p>Statistics</p>

                    {
                        this.lock ? (<Statistics good={good} neutral={neutral} bad={bad} 
                            total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>) :
                        (<NotificationFB message="There is no feedback"/>)
                    }
                    
                </section>
            
        )
    }
}