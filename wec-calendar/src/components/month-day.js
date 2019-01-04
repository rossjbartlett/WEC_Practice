import React, {Component } from 'react';
import './month-day.css'

import Popup from 'react-popup';
import './prompt.js'

class MonthDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {}
        }
    }

     handleClick(e) {
        e.preventDefault();
        let data;

        


        Popup.plugins().prompt('', 'Event name', 'Enter Start Time', 'Enter Length', ((value) => this.logger(value))
        )
        
    }

    logger(value) {
        this.setState({event: value});
    }


    render() {


        return(
            <a href="#" onClick={(e) => this.handleClick(e)}>
                <div className={this.props.grey ? "MonthDay Grey" : "MonthDay"}>
                    {this.props.day}
                    {this.state.event.name}
                    {this.state.event.startTime}
                    {this.state.event.length}
                </div>
            </a>
        )
    }

}

export default MonthDay;