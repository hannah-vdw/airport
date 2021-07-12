'use strict'

describe("Aiport", () => {

  let plane1
  let plane2
  let plane3
  let airport
  let weather

  beforeEach(() => {
    plane1 = new Plane()
    plane2 = new Plane()
    plane3 = new Plane()
    airport = new Airport(2)
    weather = new Weather()
  })

  describe("landPlane in sunny weather", () => {
    beforeEach(() => {
      spyOn(weather, 'forecast').and.returnValue('sunny')
    })

    it("hangar receives a plane", () => {
      airport.landPlane(plane1, weather)
      expect(airport.isHangar()).toContain(plane1)
    })

    it("throws error if hangar is full", () => {
      airport.landPlane(plane1, weather)
      airport.landPlane(plane2, weather)
      expect(() => { airport.landPlane(plane3, weather) }).toThrowError('No space in hangar')
    })
  })

  describe("landPlane in stormy weather", () => {
    beforeEach(() => {
      spyOn(weather, 'forecast').and.returnValue('stormy')
    })
    it("throws when weather is stormy", () => {
      expect(() => { airport.landPlane(plane1, weather) }).toThrowError('Landing prevented in stormy weather')
    })
  })

  describe("takeOff in sunny weather", () => {
    beforeEach(() => {
      spyOn(weather, 'forecast').and.returnValue('sunny')
    })

    it("plane leaves hangar", () => {
      console.log('first: ' + airport.isHangar())
      airport.landPlane(plane1, weather)
      console.log('second: ' + airport.isHangar())
      airport.takeOff(plane1, weather)
      console.log('third: ' + airport.isHangar())
      expect(airport.isHangar().length).toEqual(0)
    })

    it("reports there are no planes in hangar", () => {
      expect(() => { airport.takeOff(plane1, weather) }).toThrowError('No planes in the hangar')
    })
  })

  describe("takeOff in stormy weather", () => {
    beforeEach(() => {
      // spyOn(airport, 'landplane').and.returnValue(1)

      spyOn(weather, 'forecast').and.returnValue('stormy')
    })

    it("does not allow a plane to leave", () => {
      expect(() => { airport.takeOff(plane1, weather) }).toThrowError('Cannot take off in stormy weather')
    })

  })


})