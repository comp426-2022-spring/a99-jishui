// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Data from './datainfo'
import { FormControl, InputLabel, MenuItem, Select,} from "@mui/material"
import Graph from "./graph"

function App() {
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

      <div className="data_statistics">
        <Data title="Coronavirus Cases" cases={123} total={2000}></Data>

        <Data title="Hospitalized" cases={123} total={3000}></Data>

        <Data title="Vaccinated" cases={123} total={3000}></Data>

        <Data title="Deaths" cases={123} total={500}></Data>

        
      </div>

    </div></>


  );
 
}



export default App;
