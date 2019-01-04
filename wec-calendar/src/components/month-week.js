import React, {Component } from 'react';
import MonthDay from './month-day';
class MonthWeek extends Component {
generateDays(startDate) {
    let days = [];

    for(let i = startDate; i < startDate + 7; i++) {
        days.push(
            <MonthDay day = {i} />
        )
    }
    return days;
}

    render() {
        return(
            <div>
            {this.generateDays(this.props.startDate)}
            </div>
        )
    }
}

export default MonthWeek;