import React, { Component } from "react";

class StateData extends Component {
  state = {
    state: [],
    cases: [],
    todayCases: [],
    deaths: [],
    todayDeaths: [],
    active: []
  };

  async componentDidMount() {
    const data = await this.generateState();
    this.setState({
      data
    });
  }

  generateState = async () => {
    const url = "https://corona.lmao.ninja/states";
    fetch (url)
    .then(response => response.json())
    .then(jsondata => this.setState({
        data: jsondata
    })) 
    return this.state.data;
  };
  
  render() {
    const theState = this.state.data;
    if (theState != null) { 
      for (let i = 0; i < theState.length; i++) {
        if (this.props.match.params.state === theState[i].state) {
          const matchedState = theState[i];
          return (
            <div className='allStatesWrapper'> 
                <div class="ui breadcrumb">
                  <a href='/' class="section">Home</a>
                  <i class="right chevron icon divider"></i>
                  <a href='/states' class="section">States</a>
                  <i class="right chevron icon divider"></i>
                  <div class="active section">{this.props.match.params.state}<br></br></div>
              </div> 
              <h3>{matchedState.state} </h3>
              <div>
                Total Cases: {matchedState.cases}
              </div>   
              <div>
                Todays's Cases: {matchedState.todayCases}
              </div> 
              <div>
                Deaths: {matchedState.deaths}
              </div>        
              <div>
                Today's Deaths: {matchedState.todayDeaths}
              </div>
            </div>
          )
        }
      }
    }
    return (<div class="ui segment">
    <div class="ui active inverted dimmer">
      <div class="ui large text loader">Loading</div>
    </div>
    <p></p>
    <p></p>
    <p></p>
  </div>)
  }
}

export default StateData;
