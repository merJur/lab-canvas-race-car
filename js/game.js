class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(this.ctx);
    this.intervalId = null;
    this.car = new Car(this.ctx);
    this.obstacle = [];
    this.tickObstacle = 0;
    this.points = 0;
  }

  start() {
    this.intervalilId = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickObstacle++;

      if (this.tickObstacle % 80 === 0) {
        this.addObstacle();
      }
      this.score();
    }, 1000 / 60);
  }

  stop(){
    if(gameOver){
      this.intervalId === null
    }

  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  move() {
    this.background.move();
    this.car.move();
    this.obstacle.forEach((obs) => obs.move());
  }
  draw() {
    this.background.draw();
    this.car.draw();
    this.obstacle.forEach((obs) => obs.draw());
  }

  addObstacle() {
    this.obstacle.push(new Obstacle(this.ctx));
  }
  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }

  checkCollisions() {
    let carVsObs = this.obstacle.find((obs) => {
      return obs.collide(this.car);
    });

    if (carVsObs || this.car.x + this.car.w >= CANVAS_WIDTH) {
      this.gameOver()
      this.stop();
      
    } else {
      this.points ++;
    }
  }

  score () {
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = "center";
    this.ctx.fillText(`Score:${this.points}`, 300, 100)
}
  }

