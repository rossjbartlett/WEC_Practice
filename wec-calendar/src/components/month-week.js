import React, {component } from 'react';
import './month-day.js';
class MonthWeek extends Component {
    render() {
        return(
            <div>
            {this.props.beginningDay}
            {this.props.firstNumber}
            </div>
        )
    }

    generateDays(startDate){
        let days = [];
        for(let i=startDate; i < startDate+7; i++)
        {
            days.push(<MonthDay day = {i}/>);
        }
    }
}

export default MonthWeek;