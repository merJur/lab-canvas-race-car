class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(this.ctx);
    this.intervalId = null;
  }

  start() {
    this.intervalilId = setInterval(() => {
     // this.clear();
      this.draw();
     // this.move();
    }, 1000 / 60);
  }
 /* clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  move() {
    this.background.move();
  } */
  draw() {
    this.background.draw();
  }
}
