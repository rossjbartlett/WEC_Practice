import React, {Component } from 'react';
import MonthWeek from './month-week.js'

class Month extends Component {
    render() {

        return(
            <div className="Month" >
            <h3>{this.props.name}</h3>
            {this.generateWeeks(this.props.startIndex, this.props.prevEndDate, this.props.length)}
            </div>
        )
    
    }

    generateWeeks(startIndex, prevEndDate, length){
        let weeks = [];
        let dayCount = 0;

        while(dayCount < length) {

        if(dayCount < startIndex) {
            weeks.push(<MonthWeek startDate={prevEndDate - startIndex + 1} startIndex={startIndex} isFirstWeek={true}/>);
            dayCount += 8 - startIndex;
        }
        else if (dayCount + 7 < length) {
            weeks.push(<MonthWeek startDate={dayCount}/>);
            dayCount += 7 ;
        }
        else {
            weeks.push(<MonthWeek startDate={dayCount} isLastWeek={true} length={length}/>);
            dayCount += 7;
        }
        
    }
        if(dayCount<length){
            dayCount++;
            weeks.push(<MonthWeek startDate = {dayCount}/>)
        }

        return weeks;
    }
}

export default Month;