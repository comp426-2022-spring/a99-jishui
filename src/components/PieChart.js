import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

class PieChart extends React.Component{
  constructor(props){
      super(props)
  }
  

  render(){

    const data = {
      labels: ["Recovered Today", "Deaths Today"],
      datasets: [
        {
          label: "true",
          backgroundColor: ["rgba(75,192,192,1)", "rgba(255,0,0,1)"],
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [this.props.data.todayRecovered, this.props.data.todayDeaths],
        },
      ],
    };
      
      return(
        <div className="PieChart">
        <Pie
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

export default PieChart