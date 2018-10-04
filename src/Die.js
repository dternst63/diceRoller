import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Start from "./Start";
import "./Die.css";



class Die extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            number: 12,
            type: 6,
            start: "Start"
        }
    }
    

    render () {
        let diceNumber = this.state.number;
        let diceType = this.state.type;
        let total = diceNumber + diceType;
        

        

        return (
        <span className="Die">
        <p>{diceNumber} + {diceType} = {total}</p>
        <p>{this.Start.props.number}</p>
        </span>
        )

    }
}

export default Die;