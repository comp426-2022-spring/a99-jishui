async function get_us_covid_data() {
    const response = await fetch('https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=05b1eca6018644a58b2d7997b062cf93')
    const data = await response.json()

    console.log(data)
}