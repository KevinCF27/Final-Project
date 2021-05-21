function setup() {
    createCanvas(0, 0)
    input = createInput("Leave your contact information as well!")
    input.position(550,800)
    input.size(250,20)
    button = createButton("submit")
    button.position(650,820)
    button.mousePressed(received)
  }
  
  function draw() {
    background(220);
  }
  
  function received (){
    alert("Contact information received: " + input.value())
    
  }
