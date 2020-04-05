import React, { Component } from "react";

class AllData extends Component {
  state = {
    theData: 0, 
    isLoaded: false,
    thestate: ""
  };

  async componentDidMount() {
      const response = await fetch(`https://corona.lmao.ninja/states`);
      const data = await response.json();
      const statesArray1 = [];
      this.setState({
        theData: data,
        isLoaded: true
      });
    }

  handleClick = async (event) => {
    event.preventDefault();
    const appendState = this.state.thestate;
    return appendState;
  };

  render() {
    const {isLoaded} = this.state;
    if(isLoaded === false){
      return <></>;
    }else{
    const theElement = this.state.thestate;
    const arrayOfStates = [];
    const arrayOfCases = [];
    this.state.theData.forEach(element => {
      if (element.state === theElement){
        arrayOfStates.push(element.state)
        arrayOfCases.push(element.cases)
      }
    }
      ); 
      return (
        <div>
          <h2>Select Your State</h2>
          <p>{this.state.thestate}</p>
          <form onChange={(e) => this.setState({ thestate: e.target.value })}>
            <select>
              {this.state.theData.map(element => 
              <option key={element.state} value={element.state}>{element.state}</option>
              )}
            </select>
            <input type="submit" onClick={this.handleClick} />
          </form>
        </div>
      );
    }
  }
}

export default AllData;

