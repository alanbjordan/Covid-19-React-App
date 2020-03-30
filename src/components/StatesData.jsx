import React, { Component } from "react";

class StatesData extends Component {
  state = {

  };
  async componentDidMount() {
    try {
      const response = await fetch(`https://corona.lmao.ninja/states`);
      const data = await response.json();
      console.log(data);
      for (let i = 0; i < 4; i++ ) {
        console.log("this is i: ",i);
      }
      this.setState({
        state: data[0].state,
        cases: data[0].cases,
        todayCases: data[0].todayCases,
        deaths: data[0].deaths,
        todayDeaths: data[0].todayDeaths,
        active: data[0].active
      });
      console.log("this is new state:", this.state);

    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  
  render() {
    const data = Object.values(this.state);
    console.log("State Value" , data);
    return (
      <div>
        <h3>State:</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default StatesData;
