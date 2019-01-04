import React, {Component } from 'react';
import './month-day.css'

import Popup from 'react-popup';

class MonthDay extends Component {


     handleClick(e) {
        e.preventDefault();
        
        Popup.plugins().prompt('', 'Type your event name', function (value) {
            Popup.alert('You typed: ' + value);
        });

    }


    render() {


        return(
            <a href="#" onClick={this.handleClick}>
                <div className={this.props.grey ? "MonthDay Grey" : "MonthDay"}>
                    {this.props.day}
                </div>
            </a>
        )
    }

}

export default MonthDay;