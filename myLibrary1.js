function bounceOff (obj , obj2){
    if (obj.x - obj2.x < obj2.width/2 + obj.width/2
      && obj2.x - obj.x < obj2.width/2 + obj.width/2) {
    obj.velocityX = obj.velocityX * (-1);
    obj2.velocityX = obj2.velocityX * (-1);
  }
  if (obj.y - obj2.y < obj2.height/2 + obj.height/2
    && obj2.y - obj.y < obj2.height/2 + obj.height/2){
    obj.velocityY = obj.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
  }
  }