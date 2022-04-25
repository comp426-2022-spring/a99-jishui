import React, {useState, useEffect } from "react";

import { Line } from "react-chartjs-2"

const Graph = () => {
  const [chartData, setChartData] = useState({});
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    setChartData({
      labels : ['monday', 'tuesday', 'wed','thursday', 'friday'],
      datasets: [
      {
        label: "Dates",
        data: [32, 45, 67, 98, 45],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderWidth: 4,

      }
    ],
  })
}
  useEffect(() => {
    chart()
  }, [])
    
  return(
    // <div>
    //   <h1>I am a graph</h1>
    // </div>
    <div>
      <h1>Dankmemes</h1>
      <div style={{height: "500px"}}>
      <Line data={chartData} />


      </div>
    </div>
  )
}



export default Graph;