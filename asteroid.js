(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos) {
    velocity = Asteroids.Util.randomVec();
    Asteroids.MovingObject.call(this, pos, velocity, this.RADIUS(), this.COLOR());
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.COLOR = function () {

    var colors = ["#465c5c","#5c4946","#565c46","#4d3b49","#3b434d","#747c49"]
    var random = function () {
      return Math.floor(Math.random() * colors.length)
    }
    return colors[random()];
  };

  Asteroid.prototype.RADIUS = function () {

    var sizes = [20,22,24,28,29,30]
    var random = function () {
      return Math.floor(Math.random() * sizes.length)
    }
    return sizes[random()]
  };


})();
