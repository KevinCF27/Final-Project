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


function draw() {
  background("lightblue");

  
 
}

function received (){
  alert("Comment received: " + input.value() + "\n" + "Thanks for leaving comment!") 
}
