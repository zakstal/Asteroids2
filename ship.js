(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (pos) {
    this.vel = [0, 0];
    this.rotateLeft = false;
    this.rotateRight = false;
    this.degree = 0;
    Asteroids.MovingObject.call(this, pos, this.vel, 10, "red");
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function (impulse) {
    var direction;
    if ("forward" === impulse) {
      direction = -1;
    } else if ("reverse" === impulse) {
      direction = 1;
    }

    this.vel[0] += -Math.sin(this.degree) * direction;
    this.vel[1] += Math.cos(this.degree) * direction;

  };

  Ship.prototype.draw = function (ctx) {
    if (this.rotateLeft) {
      Asteroids.Util.rotateDegree.call(ast.game.ship, 'clockwise')
    } else if ( this.rotateRight) {
      Asteroids.Util.rotateDegree.call(ast.game.ship, 'counterClockwise')
    }
    var that = this;
    Asteroids.Util.rotateImage.call(this,function (){
      ctx.beginPath();
      ctx.moveTo(that.pos[0],that.pos[1]);
      ctx.lineTo(that.pos[0] - 15,that.pos[1] + 25);
      ctx.lineTo(that.pos[0] - 15,that.pos[1] + 50);
      //engine left
      ctx.lineTo(that.pos[0] - 22,that.pos[1] + 50);
      ctx.lineTo(that.pos[0] - 22,that.pos[1] + 25);
      ctx.lineTo(that.pos[0] - 30,that.pos[1] + 25);
      ctx.lineTo(that.pos[0] - 30,that.pos[1] + 75);
      ctx.lineTo(that.pos[0] - 22,that.pos[1] + 75);
      ctx.lineTo(that.pos[0] - 22,that.pos[1] + 60);
      //bottom
      ctx.lineTo(that.pos[0] + 20,that.pos[1] + 60);
      //right engine
      ctx.lineTo(that.pos[0] + 22,that.pos[1] + 60);
      ctx.lineTo(that.pos[0] + 22,that.pos[1] + 75);
      ctx.lineTo(that.pos[0] + 30,that.pos[1] + 75);
      ctx.lineTo(that.pos[0] + 30,that.pos[1] + 25);
      ctx.lineTo(that.pos[0] + 22,that.pos[1] + 25);
      ctx.lineTo(that.pos[0] + 22,that.pos[1] + 50);
      ctx.lineTo(that.pos[0] + 15,that.pos[1] + 50);
      ctx.lineTo(that.pos[0] + 15,that.pos[1] + 25);
      ctx.fill();
    });

  }

  Ship.prototype.fireBullet = function () {
    var bulletSpeed = this.speed() + 20;
    var xVel = bulletSpeed * Math.sin(this.degree);
    var yVel = bulletSpeed * -Math.cos(this.degree);

    return new Asteroids.Bullet([this.pos[0], this.pos[1] + 40], [xVel, yVel] );
  };

})();
