import React, { Component } from 'react';
// import {
//     Link,
//   } from 'react-router-dom';

class AllCountries extends Component {
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
        const url = "https://corona.lmao.ninja/countries";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        console.log("the country data => ", this.state.data);
        return <div>Loading Data....</div>
    }
}

export default AllCountries;