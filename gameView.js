(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var AsteroidView = Asteroids.GameView = function (ctx, canvasHeight, canvasWidth) {
    var game = new Asteroids.Game(canvasWidth, canvasHeight);
    this.game = game;
    this.ctx = ctx;
    this.bindKeyHandlers();
  };

  AsteroidView.prototype.bindKeyHandlers = function () {

    key('up, w', function(){ ast.game.ship.power("forward") });
    key('down, s', function(){ ast.game.ship.power("reverse") });
    // key('left, a', function(){ ast.game.ship.power([-1, 0]) });
    key('left, a', function(){
      ast.game.ship.rotateLeft = false;
      ast.game.ship.rotateRight = true;
    });
    // key('right, d', function(){ ast.game.ship.power([1, 0]) });
    key('right, d', function(){
      ast.game.ship.rotateRight = false;
      ast.game.ship.rotateLeft = true;
    });
    key('esc', function(){
      if (ast.counter === 0){
        ast.counter = 1;
        window.clearInterval(ast.intID);
        ctx.font = Math.ceil(canvasHeight/4) + "pt impact"
        ctx.textAlign = 'center';
        ctx.fillStyle = 'blue';
        ctx.fillText("PAUSED", canvasWidth/2, canvasHeight/2 + canvasHeight/8);
      } else {
        ast.start();
      }
    });
    key('space', function(){
      bullet = ast.game.ship.fireBullet();
      ast.game.bullets.push(bullet);
    });

    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 39 || event.keyCode === 37) {
        ast.game.ship.rotateRight = false;
        ast.game.ship.rotateLeft = false;
      }
    });
  };

  AsteroidView.prototype.start = function () {
    var that = this;
    this.counter = 0;
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    img.src = 'pics/outer-space.jpg';

    this.intID = window.setInterval(function () {
      that.game.addAsteroid();
      that.game.moveObjects();
      that.game.draw(that.ctx, img);

    for (var i in that.game.asteroids) {
      if (that.game.asteroids[i].isCollidedWith(that.game.ship)) {
        that.game.removeShip();
        that.game.makeShip();
      }

      for (var j in that.game.bullets) {
        if(!that.game.outOfBounds(j)){
          if (that.game.asteroids[i].isCollidedWith(that.game.bullets[j])) {
            that.game.removeAstBull(i, j);
          }
        }
      }
    }

// console.log("goingggg")

    }, 20);
  };


})();
