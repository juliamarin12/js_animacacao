let cor;
let circuloX;
let circuloY;

function setup() {
  
  createCanvas(750, 550); //width x height = largura x altura
  background(color(28, 28, 28));
  cor = color(random(0,225),random(0,225), random(0,225));
  circuloX = [0, 0, 0, 0];                           //lista circulos
  circuloY = [random(height), random(height), random(height), random(height)]; //lista circulos
}

function draw() {
  
  fill(cor);
  
   //console.log(circuloX.length); = comprimento
  
  for(let contador in circuloX){
   // console.log(contador);
   circle(circuloX[contador], circuloY[contador], 50);
   circuloX[contador] += random(0, 3);
   circuloY[contador] += random(-3, 3);
  
     if(circuloX[contador] >= width) {
       circuloX[contador] = 0;
       circuloY[contador] = random(height);
  }
  
  
  if (mouseIsPressed) {
      cor = color(random(0,225),random(0,225), random(0,225), random(0,100));
  }
}
}