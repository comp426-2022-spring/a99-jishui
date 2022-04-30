import "./App.css";
import Data from "./components/datainfo";
import React, { Component } from "react";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Log from "./components/Log";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

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

            <div className="loginBox">
              <a className="loginButton" href="/login.html">Log In</a>
              <a href="/signup.html">Sign Up</a>
            </div>

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
            <PieChart data={information}/>
          </div>

          <Router>
            <Link to="/login" element={<Log/>}>Login</Link>
            <Routes>
                  <Route path="/login" element={<Log/>}/>
            </Routes>
            
          </Router>

        </div>
      );
    }
  }
}

export default App;
