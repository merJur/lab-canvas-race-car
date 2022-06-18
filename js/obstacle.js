class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.y = 0;
    this.w = Math.random()*170 + 100;
    this.x = Math.random() * 300 + 50;
    this.h = 30;
    this.color = "blue";
    this.vy = 2.5;
    this.score = 0
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.randomX, this.y, this.randomW, this.h);
    this.ctx.closePath();
  }

  move() {
    this.y += this.vy;
  }

  collide(player) {
    const collideX = player.x + player.w > this.randomX && player.x < this.randomX + this.randomW;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY
}
}
