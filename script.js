var button1, button2,button3
var topp, head, body, name1
var ban1x = 0
var ban2x = -400
var ban3x = -400
var speed = 3
var s = 0
var audio1
function setup() { 
  body = select("body")
 
  button1 = createButton("Dark Mode")
  button1.position(0, 55)

  button1.mousePressed(toDark)

  
song = loadSound("audio.mp3");
button3 = createButton("bgm")
  button3.mousePressed(music)
  button3.position(100,55)
}

function music(){
 
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
 
  } else {
    song.play();

  }

  
}
function toDark() {

 
  body.style("background-color", "rgb(0,0,0)")
  

  button1.hide();

  button2 = createButton("Light Mode")
  button2.mousePressed(toLight)
  button2.position(0, 0)

}

function toLight() {
  
  
  body.style("background-color", "rgb(135,168,219)")

  button2.hide();

  button1 = createButton("Dark Mode")
  button1.mousePressed(toDark)
  button1.position(0, 0)

}

function draw() {
}
