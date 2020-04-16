import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';

class AllStates extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    } 

    async componentDidMount() {
        const data = await this.generateStates();
        this.setState({
          data
        });
      }
    
      generateStates = async () => {
        const url = "https://corona.lmao.ninja/states";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        if (this.state.data != null) {
        const statesData = this.state.data;
        console.log(statesData);
            return (
                <div className='allStatesWrapper'>
                    <div class="ui breadcrumb">
                        <a href='/' class="section">Home</a>
                        <i class="right chevron icon divider"></i>
                        <div class="active section">States</div>
                    </div>   
                    <h1>United States of America COVID-19 Data</h1>                 
                    <div className='allStates'>
                        <table className='ui selectable celled table'>
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Total Cases</th>
                                    <th>Today's Cases</th>
                                    <th>Total Deaths</th>
                                    <th>Today's Deaths</th>
                                    <th>Active Cases</th>
                                    <th>Total Test</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statesData.map(element => (
                                    <tr key={element.state}>
                                        <td>{element.state}  <Link to={`/states/${element.state}`}> more info</Link></td>
                                        <td>{element.cases}</td>
                                        <td>{element.todayCases}</td>
                                        <td>{element.deaths}</td>
                                        <td>{element.todayDeaths}</td>
                                        <td>{element.active}</td>
                                        <td>{element.tests}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div> 
            </div>
        )
        } else {
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
}

export default AllStates;