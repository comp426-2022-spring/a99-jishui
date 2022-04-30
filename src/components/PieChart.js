import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

class PieChart extends React.Component{
  constructor(props){
      super(props)
  }
  

  render(){

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
        <Pie
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Recovered to Death Ratio",
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

export default PieChart