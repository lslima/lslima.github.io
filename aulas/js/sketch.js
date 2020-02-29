var circulosos = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < floor(random(5, 20)); i++) {
    var ran1 = floor(random(width));
    var ranc = floor(random(255));
    circulosos[i] = new Circuleta(ran1, 0, ran1, ranc);
  }
  setInterval(targetGen, 4000);
}

function draw(){
  background(204);
  for (var i = 0; i < circulosos.length; i++) {
    circulosos[i].atualiza();
    circulosos[i].display();
  }
}

function targetGen() {
  for (var i = 0; i < circulosos.length; i++) {
    circulosos[i].randomizer();
  }
}

function Circuleta(tempX, tempY, tempDiameter, tempColor) {
  this.x = tempX;
  this.y = tempY;
  this.d = tempDiameter;
  this.c = tempColor;
  this.easing = 0.05;
  this.targetX = floor(random(width));
  this.targetD = floor(random(height));
  this.targetC = floor(random(255));

  this.randomizer = function(){
    this.targetX = floor(random(width));
    this.targetD = floor(random(width));
    this.targetC = floor(random(255));
  }

  this.atualiza = function(){
    this.dx = this.targetX - this.x;
    this.x += this.dx * this.easing;

    this.dd = this.targetD - this.d;
    this.d += this.dd * this.easing;

    this.dc = this.targetC - this.c;
    this.c += this.dc * this.easing;
  }

  this.display = function(){
    noFill();
    stroke(this.c);
    ellipse(this.x, this.y, this.d, this.d);
  }
}
