import React, {component } from 'react';

class MonthDay extends Component {
    render() {
        return(
            <div>
            {this.props.day}
            </div>
        )
    }
}

export default MonthDay;