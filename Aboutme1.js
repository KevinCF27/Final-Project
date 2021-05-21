var x,speed
function setup() {
  
 var c =  createCanvas(310,50)
 c.position(795,740)
  
  input = createInput("Tell me what you think about me!")
  input.position(795,800)
  input.size(230,20)

  button = createButton("submit")
  button.position(795,830)
  button.mousePressed(received)
 

   x= 0
  speed = 0
}
function preload(){
  ai = loadImage("AI.png");
}

function draw() {
  background("lightblue");
 image(ai,x,0,30,50)
  
  x+=speed
    if(x < width){
    speed+= 1
  }
  else if(x > width){
    speed-=3
      
  }
}

function received (){
  alert("Comment received: " + input.value() + "\n" + "Thanks for leaving comment!") 
}

