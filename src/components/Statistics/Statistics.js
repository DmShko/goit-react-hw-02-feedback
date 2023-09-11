import React, { Component } from "react";

export class Statistics extends Component {

    Total = () => this.props.total();

    PositivPercentage = () => this.props.positivePercentage();

    render() {

        // 'state' property destructuring
        const { good, neutral, bad } = this.props;

        return (
            <>

                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {this.Total()}</p>
                <p>Positive feedback: {this.PositivPercentage()} %</p>

            </>
        )  
    }
}