import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

class LineChart extends React.Component{
  constructor(props){
      super(props)
  }
  
  render(){
    let numbers = [
      100,
      50,
      10000
    ]
    const data = {
      labels: ["year ago", "month", "week", "current"],
      datasets: [
        {
          label: "true",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [100, 500, 400, 1000],
        },
      ],
    };
      
      return(
        <div className="BarChart">
        <Line
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Today Recovered to Today Death Ratio",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
      )
  }
}

export default LineChart