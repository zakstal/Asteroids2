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

  Util.prototype.rotate = function ( direction) {
    console.log("here");
    if (direction === "clockwise"){
      var oneDegree = (Math.PI / 180) * 5
    } else if ( direction === "counterClockwise") {
      var oneDegree = (Math.PI / -180) * 5
    }

    ast.game.ship.degree = ast.game.ship.degree + oneDegree;

    return;
    // // Clear the canvas
    // ctx.save();
    // // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //
    // // Move registration point to the center of the canvas
    // ctx.translate(pos[0], pos[1]);
    //
    // // Rotate 1 degree
    // ctx.rotate(Math.PI / 180);
    // // Move registration point back to the top left corner of canvas
    // ctx.translate(-pos[0], -pos[1]);
    //
    // ast.game.ship.draw(ctx);
    // ctx.restore();
  };



  Asteroids.Util = new Util();


})();
