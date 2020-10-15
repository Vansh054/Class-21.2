function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width 
    wallLeftEdge =  lwall.x 
    console.log(lwall.x - lwall.width / 2)
    console.log("bullet " + lbullet.x)
    console.log( "thickness" +thickness)
    if (wallLeftEdge <= bulletRightEdge
      && bulletRightEdge >= wallLeftEdge)
    {
      return true;
    }
    else
    {
      return false;
    }
}