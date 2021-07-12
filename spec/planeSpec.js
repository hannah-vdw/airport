describe("Plane", () => {

  let plane;

  beforeEach(() => {
    plane = new Plane();
  })

  it("plane works", () => {
    expect(plane.working()).toBe(true)
  })

  it("plane is instance of plane class", () => {
    expect(plane).toEqual(new Plane())
  })

})