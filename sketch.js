
var car, wall;

function setup() {
  createCanvas(1600,400);
  
  weight = random(30,52);
  speed = random(223,321);
  thickness = random(40, 60);  

  bullet = createSprite(50, 200, 50, 40);
  bullet.shapeColor = "black";
  wall = createSprite(1300,200, thickness, height/2);
  
  
   
  
}

function draw() {
  background(255,255,255);
 
   var abc = hasCollided(bullet,wall)
   var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness)
   bullet.velocityX = speed;
   if (abc == true)
   {
     bullet.velocityX = 0;

    if(damage < 10)
    {
      bullet.shapeColor = "green";
    }
    else
    if (damage > 10)
    {
      bullet.shapeColor = "red";
    }
   }
   
     
   console.log("damage " + damage)
    
   drawSprites();
}

