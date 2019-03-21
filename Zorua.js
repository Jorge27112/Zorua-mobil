var p;

function setup() {
  createCanvas(400, 400);
  p = new Zorua();
  frameRate(20);
}

function draw() {
  background(220);
  p.show();
  if(keyIsPressed && keyCode==LEFT_ARROW){
     p.izquierda();
  }
}

class Zorua{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.imgs = [];
    this.frame = 0;
    this.framex = 4; 
    for(var i = 0; i < 4;i++){
      this.imgs[i] = loadImage("ZoruaL/"+i+".gif");
    }
  }
  show(){
  imageMode(CENTER);
    image(this.imgs[this.frame],this.x,this.y);
  }
  
  izquierda(){
    this.frame++;
    this.x = this.x+10;
    
    if(this.frame > 3){
      this.frame = 0;
  }
  }
}
