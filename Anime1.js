var button, input, s, img
var button2, input2, s2, img2
var button3, input3, s3, img3
var button3, input3, s3, img3

function setup() {
  var s = createCanvas(0, 0)

  button = createButton("submit")
  button.position(innerWidth/1.25, 790)
  button.mousePressed(cc)

  input = createInput("rate your star(1-5)")
  input.position(innerWidth/1.28, 760)
  input.size(120, 20)

  s = 0

  button2 = createButton("submit")
  button2.position(innerWidth/1.25, 1350)
  button2.mousePressed(cc)

  input2 = createInput("rate your star(1-5)")
  input2.position(innerWidth/1.28, 1320)
  input2.size(120, 20)
  
  s2 = 0
  
  
  button3 = createButton("submit")
  button3.position(innerWidth/1.25, 1900)
  button3.mousePressed(cc)

  input3 = createInput("rate your star(1-5)")
  input3.position(innerWidth/1.28, 1880)
  input3.size(120, 20)
  
  s3 = 0;
  
   button4 = createButton("submit")
  button4.position(innerWidth/1.25, 2440)
  button4.mousePressed(cc)

  input4 = createInput("rate your star(1-5)")
  input4.position(innerWidth/1.28, 2420)
  input4.size(120, 20)
  
  s4 = 0;
  
  
  
  
}

function draw() {
  background(220);
}

function cc() {
  s = input.value() * 26 + 1230;
s2 = input2.value() * 26 + 1230;
  
  s3 = input3.value() * 26 + 1230;
  
   s4 = input4.value() * 26 + 1230;
  
  if (s < 1380) {
    for (var i = 1250; i < s; i += 25) {
      let img = createImg("https://www.pngkey.com/png/full/305-3051495_realstar-illinois-rating-star-single-png.png", "star")
      img.size(20, 20)
      img.position(i, 730)
    }
  }
  
  if (s2 < 1380) {
    for (var i2 = 1250; i2 < s2; i2 += 25) {
      let img2 = createImg("https://www.pngkey.com/png/full/305-3051495_realstar-illinois-rating-star-single-png.png", "star2")
      img2.size(20, 20)
      img2.position(i2, 1300)
    }

  }

 if (s3 < 1380) {
    for (var i3 = 1250; i3 < s3; i3 += 25) {
      let img3 = createImg("https://www.pngkey.com/png/full/305-3051495_realstar-illinois-rating-star-single-png.png", "star3")
      img3.size(20, 20)
      img3.position(i3, 1860)
    }

  }
  
  
   if (s4 < 1380) {
    for (var i4 = 1250; i4 < s4; i4 += 25) {
      let img4 = createImg("https://www.pngkey.com/png/full/305-3051495_realstar-illinois-rating-star-single-png.png", "star4")
      img4.size(20, 20)
      img4.position(i4, 2400)
    }

  }
  
  
}
