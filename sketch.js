var gameState="dart";
var car;
var car1,car2,car3,car4,car1Img, car2Img,car3Img,car4Img,hero,Bullet,Enemy,canShoot;
var laserImage,spaceship2,spaceship1,laser;
var cartrack2Img;
var carState="wait";
function preload()
{
	car1Img = loadImage("car1.jpg");
	car2Img = loadImage("car2.png");
	car3Img = loadImage("car3.png");
	car4Img = loadImage("car4.png");
	cartrack2Img = loadImage("cartrack2.jpg");
	laserImage=loadImage("laser2.png");
        spaceship1 = loadImage("spaceship1.jpg");
        spaceship2 = loadImage("spaceship2.png");
}

function setup() {
	createCanvas(displayWidth*2,displayHeight);
	car = new CarRacing();
	dart = new Dart();
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(gameState==="wait") {
	  //display story by using text command
	  background("white")
	  fill("red")
	  textSize(30);
	  text("Aliens have landed to capture your city! To save your city you need to complete certain tasks",150,200)
	  text("1st task is car racing game",150,230);
	  text("Press space to start",150,260);

  }

  if (gameState==="end"){

  }

  if(keyDown("space")){
	  gameState="carracing";

	 }

  if(gameState==="carracing"){
	  if(carState==="wait"){
		background(cartrack2Img)
		  car.start();
		  textSize(30)
		text("Press enter to start the game",150,50);
		text("Press 'S' to increase the speed",150,70)
		if(keyDown("enter")){
			carState="play";
		}
	  }
	  if(carState=="play"){
		background(cartrack2Img)
		car.play();
		car2.velocityX=9.5;
			car3.velocityX=9;
			car4.velocityX=9;
		
		if(keyDown("right_arrow")){
			car1.velocityX = 9.5;

		}	
		if(keyDown("s")&&car1.velocityX<=11){
			car1.velocityX +=1;
		}
	//	camera.position.x = car1.x;
		camera.position.y = car1.y;
		
		if(car1.x>2900&&car2.x<2900&&car3.x<2900&&car4.x<2900){
			//gameState = "dart";
			car1.velocityX=0;
			car2.velocityX=0;
			car3.velocityX=0;
			car4.velocityX=0;
       textSize(30);
		text("YOU WIN!!!",2500,displayHeight/2);
		text("Press space to go to next Level",2500,displayHeight/2+100);
		}
		if(keyDown("space")){
			gameState = "dart";
			car1.remove();
			car2.remove();
			car3.remove();
			car4.remove();
		}
	  }
	
		
  }
  
  if(gameState==="dart"){
createCanvas(600,600);
	edges=createEdgeSprites();
	Enemy.bounceOff(edges);
	if(keyDown("enter")){
	dart.ShootLaser();
	}
	background("Lightblue");
	
	if (keyDown(LEFT_ARROW)) {
		(hero.x) = hero.x - 5;
	  }
	if (keyDown("right")) {
	   (hero.x) = hero.x + 5;
	  }
	hero.bounceOff(edges);
	if (laser.isTouching(Enemy)) {   
		Enemy.addImage(spaceship1);
	text("You win",400,400)
	  Enemy.velocityX=0;
		
	}
	  
	
	
	drawSprites();
  }

  drawSprites();
 
}

//1. end state- if car reaches certain position then u win
//if other player reaches then u lose
//if u win then change the gameState to dart
//for dart game add picture
//

