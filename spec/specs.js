describe('triangle', function() {
  it("is false if one side of a triangle is greater than the sum of the other two sides", function() {
    expect(triangle([1, 2, 6])).to.equal("not a triangle");
  });

  it("is an equilateral triangle if all sides are equal", function() {
    expect(triangle([3, 3, 3])).to.equal("an equilateral triangle")
  });

  it("is an isosceles triangle if 2 sides are equal", function() {
    expect(triangle([1, 2, 2])).to.equal("an isosceles triangle")
  });

  it("is a scalene triangle if no sides are equal", function() {
    expect(triangle([1, 2, 3])).to.equal("a scalene triangle")
  });

});
