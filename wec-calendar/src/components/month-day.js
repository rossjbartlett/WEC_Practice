import React, {Component } from 'react';
import './month-day.css'

class MonthDay extends Component {
    render() {

        return(
            <div className={this.props.grey ? "MonthDay Grey" : "MonthDay"}>
            {this.props.day}
            </div>
        )
    }
}

export default MonthDay;