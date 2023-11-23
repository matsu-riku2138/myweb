let timer = 0;
let delay = 0;
let isPress = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(isPress){
    timer++;
  }else{
    delay++;
  }
}
function mousePressed(){
  isPress = true;
  if(delay > 50){
    console.log("空白")
    delay = 0;
  }
}
function mouseReleased(){
  isPress = false;
  console.log(timer);
  delay = 0;
  timer = 0;
}
