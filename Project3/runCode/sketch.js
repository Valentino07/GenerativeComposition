let points = []
let distance = 1.5
function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke()
  for(let i = 0; i < 100; i++){
    let x = random(width)
    let y = random(height)
    let a = random(TWO_PI)
    let fill = color(random(255), random(255), random(255), 50)
    points[i] = {xval:x, yval:y, directionX:distance*cos(a), directionY:distance*sin(a), fill:fill}
    line = new Line();
  }
}

class Line{
  constructor(){
  }
  generate() {
    for(let i = 0; i < 100; i++){
      let point = points[i]
      point.xval += point.directionX
      point.yval += point.directionY
      if(point.xval > width || point.xval < 0){
        point.directionX = point.directionX * -1
      }
      if(point.yval > height || point.yval < 0){
        point.directionY = point.directionY * -1
      }
      fill(point.fill)
      circle(point.xval, point.yval, 10)
      let x = random(width)
      let y = random(height)
      square(x, y, 5)
    }
  }
}

function draw() {
    line.generate();
  }