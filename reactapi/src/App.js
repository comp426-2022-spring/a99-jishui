import React, { Component } from 'react';
import Data from './datainfo'
import { FormControl, InputLabel, MenuItem, Select,} from "@mui/material"
//import Graph from "./graph"

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
        <><div className="app">
          <div className="head">
            <h1>COVID-19 DASHBOARD</h1>
    
            
            <FormControl className="dropdown_menu" fullWidth>
              <InputLabel id="label_select">Select Option</InputLabel>
              <Select variant="outlined">
                <MenuItem value="current_cases">Current Cases</MenuItem>
                <MenuItem value="deaths">Total Deaths</MenuItem>
                <MenuItem value="vaccinated">Total Vaccinated</MenuItem>
                <MenuItem value="hospitalized">Total Hospitalized</MenuItem>
    
    
              </Select>
            </FormControl>
          </div>


    
          <a href = "https://github.com/comp426-2022-spring/a99-jishui/blob/main/src/login.html">LOGIN</a>

          <div className="data_statistics ">
            <Data title="Coronavirus Cases" cases={123} total={items.deaths}></Data>
    
            <Data title="Hospitalized" cases={123} total={items}></Data>
    
            <Data title="Vaccinated" cases={123} total={3000}></Data>
    
            <Data title="Deaths" cases={123} total={500}></Data>
    
            
          </div>
        </div></>

        
        
    
      );
    }
  }
}

export default App;
