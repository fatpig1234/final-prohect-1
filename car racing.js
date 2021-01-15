class CarRacing{
constructor(){
    
}
start(){
    car1 = createSprite(25,300,20,20);
    car1.scale = 0.15;
    car1.addImage(car1Img);
    car2 = createSprite(25,400,20,20);
    car2.addImage(car2Img);
    car3 = createSprite(25,500,20,20);
    car3.addImage(car3Img);
    car4 = createSprite(25,600,20,20);
    car4.addImage(car4Img);
}
play(){
    background(cartrack2Img)
    

drawSprites();


}

    
}