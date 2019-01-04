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
<<<<<<< HEAD

    generateDays(startDate){
        let days = [];
        for(let i=startDate; i < startDate+7; i++)
        {
            days.push(<MonthDay day = {i}/>);
        }
    }
=======
>>>>>>> 82aa8bf74e189fb00c91b0b818e9d787af762cd4
}

export default MonthWeek;