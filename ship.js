(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (pos) {
    this.vel = [0, 0];
    this.direction = [0, 1];
    this.rotateLeft = false;
    this.rotateRight = false;
    this.degree = 0;
    Asteroids.MovingObject.call(this, pos, this.vel, 10, "red");
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  []

  Ship.prototype.draw = function (ctx) {
    ctx.save();
    var center = this.pos[1] + 25;
    ctx.translate(this.pos[0], center);

    ctx.rotate(this.degree);
    ctx.translate(-this.pos[0], -center);

    ctx.beginPath();
    ctx.moveTo(this.pos[0],this.pos[1]);
    ctx.lineTo(this.pos[0] + -20,this.pos[1] + 50);
    ctx.lineTo(this.pos[0] + 20,this.pos[1] + 50);
    ctx.fill();
    ctx.restore();
  }

  Ship.prototype.fireBullet = function () {
    var bulletSpeed = 20;
    if (this.vel[0] === 0 && this.vel[1] === 0 ){
      var xVel = bulletSpeed;
      var yVel = 0;
    } else {
      var xVel = bulletSpeed * this.vel[0] / Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2));
      var yVel = bulletSpeed * this.vel[1] / Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2));
    }

    return new Asteroids.Bullet(this.pos, [xVel, yVel] );
  };

})();
