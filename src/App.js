import "./App.css";
import Data from "./datainfo";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { Component } from "react";
import BarChart from "./components/BarChart";
<<<<<<< HEAD
import Log from "./components/Log";
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'
=======
import PieChart from "./components/PieChart";
>>>>>>> 0401a85af2d5705bba4a3f813564edb9c5c0dd0e
import LineChart from "./components/LineChart";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/countries/usa")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    let information = this.state.items;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <div className="head">
            <h1>US COVID-19 DASHBOARD</h1>

          <Router>
            <Link to="/login" element={<Log/>}>Login</Link>
            <Routes>
                  <Route path="/login" element={<Log/>}/>
            </Routes>
            
          </Router>

          </div>

          <br />
          <br />

          <div className="data_statistics">
            <Data
              title="Total Coronavirus Cases"
              cases={items.cases}
            ></Data>

            <Data
              title="Total Recovered"
              cases={items.recovered}
            ></Data>

            <Data
              title="Total Active Cases"
              cases={items.active}
            ></Data>

            <Data
              title="Total Deaths"
              cases={items.deaths}
            ></Data>
          </div>

          <br />
          <br />

          <div className="charts">
            <BarChart data={information}/>
            <LineChart/>
          </div>


        </div>
      );
    }
  }
}

export default App;
