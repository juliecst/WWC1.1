let names;
let levels;

let currIdxN = 0;
let currIdxL = 0;


let nStep = 0.005;


function setup() {
  
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  names = loadStrings("Psilocybe azurescens.txt");

  noLoop();
  
}

function draw() {

  background(0, 0, 0, 150);
  
  let baseHue = random(360);
  noStroke();
  
  
  
  
  for (let x = 0; x < width; x += 1){
    let nX = x *nStep;
    for (let y = 0; y < height; y += 1){
         let nY = y * nStep;
         
         let nP = noise(nX, nY) *1.5
    
      let nValH = noise(20 *nP, nX, nY);
      let nValS = noise(20, nX, nY) *nP;
      let nValB = noise(40 *nP/2 , nX, nY) ;
      let nHue = (baseHue + nValH * 240) % 360;
      let nSat = 30 + 60 * nValS;
      let nBri = 20 + 80 * nValB;

    fill(nHue, nSat, nBri, 150);
    rect(x, y, 1, 1);
      
  
         }
  }
  
  //print the names
  textAlign(CENTER);
  textSize(30);
  noStroke();
  strokeWeight(2);
  fill(0, 0, 100);
  
  text(names[currIdxN], 200, 300);
  currIdxN++;
 
  
  
}
function mouseClicked() {
  let dt = new Date();
  noiseSeed(dt.getTime());
  
  
  //start from the beginning once list is done
   if(currIdxN >= names.length ){
    currIdxN = 0;
  }
    redraw();
}

