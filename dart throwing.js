class Dart{
    constructor(){
        //download 2 images 
        //1 player 2 enemy
        canShoot = true;
        
        hero = createSprite(200, 500);
        //add image instead of set animation
        hero.addImage(spaceship1);
        hero.scale=0.1;
        laser = createSprite(450, 310);
        laser.addImage(laserImage);
        laser.y=(hero.y)-(hero.height)/2;
        laser.scale=0.3;
        Enemy = createSprite(350, 50);
        Enemy.addImage(spaceship2);
        Enemy.velocityX = -6;
        Enemy.scale=0.5;
    }
ShootLaser() {
    
      laser.y=(hero.y)-(hero.height)/2;
      laser.x = hero.x;
      laser.velocityY = -10;
     canShoot = false; 
     if (laser.y < -10) {
      laser.x = 450;
      laser.velocityY= 0;
      laser.y = hero.y;
      canShoot= true;
       
     }
       
    
  }
MoveEnemy() {
    if (Enemy.x > 350) {
      Enemy.velocityX = -6;
    } else if (Enemy.x < 25) {
      Enemy.velocityX = 6;
    }
}
}
  
