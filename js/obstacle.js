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
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }

  move() {
    this.y += this.vy;
  }

  collide(car) {
    const collideX = car.x + car.w > this.x && car.x < this.x + this.w;
    const collideY = car.y < this.y + this.h && car.y + car.h > this.y;

    return collideX && collideY
}
}
