import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';


class RollDice extends Component {
    static defaultProps = {
        sides:["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state={dice1:'one', dice2:'two', rolling:false};
        this.genRandom = this.genRandom.bind(this);
    }
    genRandom () {
        let rand1 = Math.floor(Math.random()*this.props.sides.length);
        let rand2 = Math.floor(Math.random()*this.props.sides.length);
        this.setState({dice1:this.props.sides[rand1], dice2:this.props.sides[rand2], rolling:true });
        setTimeout(() => {
            this.setState({rolling:false});
        }, 1000);
    }

    
    render() {
        return (
            <div>
                <div className = "RollDice">
                    <Dice face={this.state.dice1} Rolling={this.state.rolling}/>
                    <Dice face={this.state.dice2} Rolling={this.state.rolling}/>
                </div>
                <div> 
                    <button className="RollDice-button" onClick={this.genRandom} disabled={this.state.rolling}>
                        {this.state.rolling? 'Rolling...' : 'Roll Dice!'}
                        </button>
                </div>
            </div>
        )
    }
}

export default RollDice;