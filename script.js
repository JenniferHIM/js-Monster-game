window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  ctx.fillStyle = 'black';
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'pink';

  class Player {
    constructor(game) {
      this.game = game;
      this.collisionX = this.game.width * 0.5;
      this.collisionY = this.game.height * 0.5;
      this.collisionRadius = 30;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
  }

  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.Player = new Player(this);
    } 

    render(context) {
        // this.player.draw(context);
        this.Player.draw(context);
    }
  }

  const game = new Game(canvas);
  game.render(ctx);
  console.log(game);

  function animate() {}
});
