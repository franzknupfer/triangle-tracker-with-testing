// Because import and export are ES6 syntax, we need to babelify and transpile ES6 to ES5.

var Triangle = require('./../js/triangle.js').triangleModule;


$(document).ready(function(event) {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var triangle = new Triangle(side1, side2, side3);
    var result = triangle.checkType();

    $(".triangle_type").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
