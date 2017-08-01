var Triangle = require('./../js/triangle.js').triangleModule;
console.log(Triangle);
describe('Triangle', function() {

  it('should correctly determine if a triangle is equilateral', function() {
    debugger;
    console.log("hello");
    var triangle = new Triangle(3,3,3)
    expect(triangle.checkType()).toEqual("an equilateral triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22)
    console.log(notTriangle);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

});
