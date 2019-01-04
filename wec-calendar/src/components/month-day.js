import React, {Component } from 'react';
import './month-day.css'

import Popup from 'react-popup';
import './prompt.js'

class MonthDay extends Component {


     handleClick(e) {
        e.preventDefault();
        
        Popup.plugins().prompt('', 'Event name', 'Enter Start Time', 'Enter Length', function (data) {
            Popup.alert('You typed: ' + data);
            
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