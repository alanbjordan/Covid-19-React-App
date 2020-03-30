import React, { Component } from "react";

class AllData extends Component {
  state = {
    theData: 0, 
    isLoaded: false,
    value: "Georgia"
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://corona.lmao.ninja/states`);
      const data = await response.json();
      this.setState({
        theData: data,
        isLoaded: true,
        value: ""
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    console.log("Updated State: ", this.state.value)
  };
  
  render() {
    const {isLoaded} = this.state;
    if(isLoaded === false){
      return <div></div>;
    }else{
    const theElement = this.state.value;
    this.state.theData.forEach(element => {
      if (element.state === theElement){
        console.log(element.cases)
      }
    }
      ); 
    return (
      <div>
        <h2>Select Your State</h2>
        <p>{this.state.value}</p>
        <p></p>
        <form onChange={(e) => this.setState({ value: e.target.value })}>
          <select>
            {this.state.theData.map(element => 
            <option key={element.state} value={element.state}>{element.state}</option>
            )}
          </select>
          <input type="submit" onClick={this.handleClick} />
          {console.log("lower log US State: ",this.state.value)}
        </form>
          
      </div>
    );
  }
}
}

export default AllData;

