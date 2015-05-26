var triangle = function(side) {
  if ((side[0] > (side[1] + side[2])) || (side[1] > (side[0] + side[2])) || (side[2] > (side[0] + side[1]))) {
    return "not a triangle";

  }  else if ((side[0] === side[1]) && (side[1] === side[2])) {
    return "an equilateral triangle";

  } else if ((side [0] === side[1]) || ((side[0] === side[2])) || ((side[1] === side[2]))) {
    return "an isosceles triangle";

  } else if ((side[0] !== side[1]) && ((side[0] !== side[2])) && ((side[1] !== side[2]))) {
    return "a scalene triangle";
  }
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle([side1, side2, side3]);

    $(".triangle_type").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
