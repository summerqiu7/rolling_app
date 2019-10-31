import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state={num:1};
    }
    render() {
        return (
            <div>
                <i className={`Dice fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Dice;