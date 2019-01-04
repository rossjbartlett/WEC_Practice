import React, {Component } from 'react';
import MonthDay from './month-day';
class MonthWeek extends Component {




    render() {
        return(
            <div>
            {this.generateDays(this.props.startDate,this.props.isFirstWeek, this.props.startIndex, this.props.isLastWeek, this.props.length)}
            </div>
        )
    }

    generateDays(startDate,isFirstWeek, startIndex, isLastWeek, length){
        let days = [];

        for(let currentDate=0; currentDate < 7; currentDate++)
        {

            if(isFirstWeek){
                if(currentDate < startIndex ) {
                    days.push(<MonthDay day = {currentDate + startDate} grey={true}/>);
                }
                else {
                    days.push(<MonthDay day = {currentDate - startIndex + 1}/>);
                }
            }
            else if(isLastWeek){
                if(currentDate+startDate <= length){
                    days.push(<MonthDay day = {currentDate+startDate}/>);
                }
                else{
                        days.push(<MonthDay day = {currentDate + startDate - length} grey={true}/>);

                }

            }
            else{
                days.push(<MonthDay day = {currentDate + startDate}/>);
            }
            
        }
        return days;
    }
}

export default MonthWeek;