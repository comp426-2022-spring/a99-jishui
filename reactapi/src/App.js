import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://disease.sh/v3/covid-19/countries/usa')
      .then(res=> res.json())
      .then(json=> {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  } 

  render() {
    var{ isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          <ul>
            Country: {items.country} | Cases today: {items.todayCases}
          </ul>
        </div>
      );
    }
  }
}

export default App;
