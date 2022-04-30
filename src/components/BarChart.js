import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

class BarChart extends React.Component{
  constructor(props){
      super(props)
  }
  

  render(){

    const data = {
      labels: ["Information"],
      datasets: [
        {
          label: "Total Recovered",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [this.props.data.recovered]
        },
        {
          label: "Total Deaths",
          backgroundColor: "rgba(255,0,0,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [this.props.data.deaths]
        }
      ],
    };
      
      return(
        <div className="BarChart">
        <Bar
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Total Recovered to Total Death Ratio",
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

export default BarChart