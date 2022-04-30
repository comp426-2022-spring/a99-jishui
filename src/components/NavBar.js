import React from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Card,
    CardContent,
  } from "@mui/material";
  
const NavBar = () => {
  return (
    <div className="head">
            <h1>COVID-19 DASHBOARD</h1>

            {/* <Router>
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Log/>}/>
              </Routes>
            </Router> */}
            {/* <link element={<Log/>}>Login</link> */}

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
  )
}

export default NavBar();