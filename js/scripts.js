var triangle = function(side) {
  if ((side[0] > (side[1] + side[2])) || (side[1] > (side[0] + side[2])) || (side[2] > (side[0] + side[1]))) {
    return "not a triangle";

  }  else if ((side[0] === side[1]) && (side[1] === side[2])) {
    return "equilateral triangle";

  } else if ((side [0] === side[1]) || ((side[0] === side[2])) || ((side[1] === side[2]))) {
    return "isosceles triangle";
  }
};
