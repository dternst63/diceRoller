import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dice from "./Die"
import "./Start.css"


class Start extends Component {
    constructor (props) {
      super(props)

     
      this.state = {
        diceNumber: 10,
        diceType: 6,
        diceRandom: Math.floor((Math.random() * 6) + 1)
      }
    }

    

    handleNumberChange(event) {
      this.setState({diceNumber: event.target.value})
    }

    handleTypeChange(event) {
      this.setState({diceType: event.target.value})
    }

    handleRandomGenerator(){
      let number = this.state.diceType;
      this.setState({diceRandom: Math.floor((Math.random() * number) + 1)});
    }


    
    render() {
      return (
        <div className="NavBox">
            <p>Dice Roller</p> 
            <button>Press</button>
            <br /><br />
            <input type="text" className="Dice-number" name="diceNumber" value={this.state.diceNumber} onChange={this.handleNumberChange.bind(this)}/>
            <span>D </span>
            <input type="text" className="Dice-type"  name="diceType" value={this.state.diceType} onChange={this.handleTypeChange.bind(this)} />
            <span> dice:  </span>
            <p>{this.state.diceRandom}</p>
          
        </div>
      );
    }
  }
  
  export default Start;