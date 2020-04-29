function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  let radius = 300;
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", 220];

  colors.forEach(color => {
    drawArc(color, radius);
    radius -= 40;
  });

  fill('black');
  textSize(40);
  text("Ça va bien aller!", 25, 300);
}

function drawArc(color, radius) {
  fill(color);
  arc(200, 200, radius, radius, -PI, 0);
}
