// import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <><div className="app">
      <h1>COVID-19 DASHBOARD</h1>

    </div><select>
        <option selected value="current_cases">Current Cases</option>

        <option value="deaths">Total Deaths</option>
        <option value="vaccinated">Total Vaccinated</option>
        <option value="hospitalized">Total Hospitalized</option>

      </select></>


  );
 
}



export default App;
