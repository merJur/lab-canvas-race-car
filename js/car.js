class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = CANVAS_WIDTH / 2.1;
    this.y = CANVAS_HEIGHT / 1.15;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.w = 30;
    this.h = 70;
    this.vx = 0;

    this.actions = {
      left: false,
      rigth: false,
    }

    this.setListener()
    }
  move() {
    this.applyActions();
    this.x +=this.vx
    }

  setListener() {
    document.onkeydown = (e) => this.switchAction(e.code, true);
    document.onkeyup = (e) => this.switchAction(e.code, false);
  }
  applyActions() {
    if (this.actions.rigth) {
      this.vx += 2;
    } else if (this.actions.left) {
      this.vx += -2;
    } else {
      this.vx = 0;
    }
  }
  switchAction(key, apply) {
    switch (key) {
      case LEFT:
        this.actions.left = apply;
        break;
      case RIGTH:
        this.actions.rigth = apply;
        break;
    }
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
