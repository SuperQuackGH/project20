var car;
var wall;
var speed, weight, deformation;
function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 200, 60, 200);
  car = createSprite(100, 200, 50, 50);
  
  
  

}


function draw() {
  background("white");  
  if (keyDown("SPACE")) {
    speed = random(55,90);
    weight = random(400, 1500);
    
    car.x = 100;
    car.shapeColor = color(0, 0, 255);
    car.velocityX = speed;
  }
  if (isTouching(car, wall)) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;
    console.log("speed:" + speed, "weight:" + weight,  "deformation:" + deformation)
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0)
    } else if (deformation > 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0)
    } else if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    } 

  } 


  drawSprites();
}