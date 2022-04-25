// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Data from './datainfo'
import { FormControl, InputLabel, MenuItem, Select, Card, CardContent} from "@mui/material"
import LineGraph from "./graph.js"
import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://disease.sh/v3/covid-19/countries/usa')
      .then(res=> res.json())
      .then(json=> {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  } 

  

  render() {
    var{ isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        

    <div className="app">
      <div className="head">
        <h1>COVID-19 DASHBOARD</h1>

        <div className="loginBox">
          <a href="/login.html">Log In</a>
          <a href="/signup.html">Sign Up</a>
        </div>

        <div className="box2">     
          <FormControl className="dropdown_menu">
            <InputLabel id="label_select">Select Option</InputLabel>
            <Select variant="outlined">
              <MenuItem value="current_cases">Current Cases</MenuItem>
              <MenuItem value="deaths">Total Deaths</MenuItem>
              <MenuItem value="vaccinated">Total Vaccinated</MenuItem>
              <MenuItem value="hospitalized">Total Hospitalized</MenuItem>


            </Select>
          </FormControl>

        </div>
      </div>

          <div className="data_statistics">
            <Data title="Coronavirus Cases" cases={items.cases} total={items.cases}></Data>
    
            <Data title="Recovered" cases={items.recovered} total={items.recovered}></Data>
    
            <Data title="Active Cases" cases={items.active} total={items.active}></Data>
    
            <Data title="Deaths" cases={items.deaths} total={items.deaths}></Data>
    
            
          </div>

          
          
          
    
        </div>
        
    
    
      );
    }
  }
}



export default App;
