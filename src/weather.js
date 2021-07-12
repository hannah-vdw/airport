class Weather {

  forecast() {
    let weather = ['sunny', 'sunny', 'sunny', 'stormy']
    return weather[Math.floor(Math.random() * weather.length)]
  }

}