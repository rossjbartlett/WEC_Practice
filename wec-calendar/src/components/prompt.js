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
        let data = e.target.value;
        let id = e.target.id;
        switch(id) {
            case 'name':
                this.setState({name: data});
                break;
            case 'startTime':
                this.setState({startTime: data});
                break;
            case 'length':
                this.setState({length: data});
                break;
        }
        // this.setState({name, startTime, length});
    }

    render() {
        return(
        <div>
            <input type="text" placeholder={this.props.placeholder} id="name" className="mm-popup__input" value={this.state.name} onChange={this.onChange} />
            <input type="text" placeholder={this.props.placeholder} id="startTime" className="mm-popup__input" value={this.state.startTime} onChange={this.onChange} />
            <input type="text" placeholder={this.props.placeholder} id="length" className="mm-popup__input" value={this.state.length} onChange={this.onChange} />
        
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