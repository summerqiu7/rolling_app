import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';


class RollDice extends Component {
    static defaultProps = {
        sides:["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state={dice1:'one', dice2:'two'};
        this.genRandom = this.genRandom.bind(this);
    }
    genRandom () {
        let rand1 = Math.floor(Math.random()*this.props.sides.length);
        let rand2 = Math.floor(Math.random()*this.props.sides.length);
        this.setState({dice1:this.props.sides[rand1], dice2:this.props.sides[rand2]});
    }
    render() {
        return (
            <div>
                <div className = "RollDice">
                    <Dice face={this.state.dice1} />
                    <Dice face={this.state.dice2} />
                </div>
                <div>
                    <button onClick={this.genRandom}>Rolling Dice</button>
                </div>
            </div>
        )
    }
}

export default RollDice;