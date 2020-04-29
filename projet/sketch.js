let rayon;
let origin;

function setup() {
  createCanvas(400, 400);
  rayon = 100;
  origin = 0;
}

function draw() {
  // background(220);
  let c;
  c = color('rgba(0,0,0,0)');
  fill(c);
  stroke('black');
  line(0, origin, 400, origin);
  line(origin,0, origin,400);
  stroke('red');
  circle(origin, origin, rayon);
  circle(origin + rayon/2, origin, rayon);
  circle(origin - rayon/2, origin, rayon);
  circle(origin, origin + rayon/2, rayon);
  circle(origin, origin - rayon/2, rayon);
  origin+= 100;
}
