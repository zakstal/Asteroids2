(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = function () {

  };

  Util.prototype.inherits = function(underClass, superClass){
    var surrogate = function (){};
    surrogate.prototype = superClass.prototype;
    underClass.prototype = new surrogate();
  };

  Util.prototype.randomVec = function () {
    var xdir = (Math.random() * 5) - 2.5;
    var ydir = (Math.random() * 5) - 2.5;

    return [xdir, ydir];
  };

  Util.prototype.wrap = function (pos, dim) {
    var x = (pos[0] + dim[0]) % dim[0];
    var y = (pos[1] + dim[1]) % dim[1];

    return [x, y];
  };

  Util.prototype.rotateDegree = function (direction) {
    if (direction === "clockwise"){
      var oneDegree = (Math.PI /  360) * 10
    } else if ( direction === "counterClockwise") {
      var oneDegree = (Math.PI / -360) * 10
    }

    this.degree = this.degree + oneDegree;
  };

  Util.prototype.rotateImage = function (draw) {
    ctx.save();
    var center = this.pos[1] + 40;
    ctx.translate(this.pos[0], center);

    ctx.rotate(this.degree);
    ctx.translate(-this.pos[0], -center);
    draw();
    ctx.restore();
  };



  Asteroids.Util = new Util();


})();
