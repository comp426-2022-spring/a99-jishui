// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FormControl, MenuItem, Select,} from "@mui/material"

function App() {
  return (
    <><div className="app">
      <h1>COVID-19 DASHBOARD</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="current_cases">Current Cases</MenuItem>
          <MenuItem value="deaths">Total Deaths</MenuItem>
          <MenuItem value="vaccinated">Total Vaccinated</MenuItem>
          <MenuItem value="hospitalized">Total Hospitalized</MenuItem>


        </Select>
      </FormControl>

    </div></>


  );
 
}



export default App;
