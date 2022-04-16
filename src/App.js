// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select,} from "@mui/material"

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

    </div></>


  );
 
}



export default App;
