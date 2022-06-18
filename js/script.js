const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const StartBtn = document.getElementById("start-button");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    if (game.intervalId === null) {
      game.start();
    } else {
      game.stop();
    }
  };
};
