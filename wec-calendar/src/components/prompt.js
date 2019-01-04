import React, {Component } from 'react';
import Popup from 'react-popup';
import './popup.css'

class Prompt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.defaultName,
            startTime: this.props.defaultStartTime,
            length:this.props.defaultLength
        };

        this.onChange = (e) => this._onChange(e);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.onChange(this.state);
        }
    }

    _onChange(e) {
        let {name, startTime, length} = e.target;
        console.log(e);
        this.setState({name, startTime, length});
    }

    render() {
        return(
        <div>
            <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.name} onChange={this.onChange} />
            <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.startTime} onChange={this.onChange} />
            <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.length} onChange={this.onChange} />
        
        </div>)
        
    }
}

/** Prompt plugin */
Popup.registerPlugin('prompt', function (placeholder, defaultName,defaultStartTime,defaultLength, callback) {
    let promptValue = null;


    let promptChange = function ({name,startTime,length}) {
        promptValue = JSON.stringify({ name, startTime, length});
    };

    this.create({
        title: 'Event Info',
        content: <Prompt 
        onChange={promptChange} 
        placeholder={placeholder} 
        name={defaultName} 
        startTime={defaultStartTime} 
        length={defaultLength}
        />,
        buttons: {
            left: ['cancel'],
            right: [{
                text: 'Save',
                key: '⌘+s',
                className: 'success',
                action: function () {
                    callback(promptValue);

                    Popup.close();
                }
            }]
        }
    });
});