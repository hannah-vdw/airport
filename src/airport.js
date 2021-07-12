class Airport {

  constructor(capacity = 3) {
    this.hangar = []
    this.capacity = capacity
    this.weather = new Weather()
  }

  isHangar() {
    return this.hangar
  }

  isCapacity() {
    return this.capacity
  }

  isUnderCapacity() {
    if (this.isHangar().length < this.isCapacity()) {
      return true
    } else {
      return false
    }
  }

  landPlane(plane, weather) {
    if (weather.forecast() === 'sunny' && this.isUnderCapacity()) {
      this.hangar.push(plane)
    } else if (weather.forecast() === 'sunny' && !this.isUnderCapacity()) {
      throw new Error('No space in hangar')
    } else if (weather.forecast() === 'stormy') {
      throw new Error('Landing prevented in stormy weather')
    }
  }

  takeOff(plane, weather) {
    if (this.isHangar().includes(plane) && weather.forecast() === 'sunny') {
      this.hangar = this.hangar.filter(p => p !== plane)
    } else if (weather.forecast() === 'stormy') {
      throw new Error('Cannot take off in stormy weather')
    } else if (this.isHangar().length === 0) {
      throw new Error('No planes in the hangar')
    }
  }


}