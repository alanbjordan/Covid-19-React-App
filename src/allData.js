import React, { Component } from "react";

class AllData extends Component {
  state = {
    theData: 0, 
    isLoaded: false,
    thestate: "Choose a state."
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://corona.lmao.ninja/states`);
      const data = await response.json();
      this.setState({
        theData: data,
        isLoaded: true,
        thestate: ""
        
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    console.log("Updated State: ", this.state.thestate)
    const appendState = this.state.thestate;
    return appendState;
  };


  render() {
    const {isLoaded} = this.state;
    if(isLoaded === false){
      return <div></div>;
    }else{
    const theElement = this.state.thestate;
    const arrayOfStates = [];
    const arrayOfCases = [];
    this.state.theData.forEach(element => {
      if (element.state === theElement){
        arrayOfStates.push(element.state)
        arrayOfCases.push(element.cases)
        console.log("The States Array: ",arrayOfStates)
        console.log("The Cases Array: ", arrayOfCases)
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
            <option key={element.state} thestate={element.state}>{element.state}</option>
            )}
          </select>
          <input type="submit" onClick={this.handleClick} />
          {console.log("lower log US State: ",this.state.theData[0])}
        </form>
      </div>
    );
  }
}
}

export default AllData;

