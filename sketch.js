
/*This is a recreation of les Demoiselles d'Avignon */
var particles = [];

function setup() {
  createCanvas(700,700);
  noStroke();
}

function mousePressed(){
  var p = new Particle(mouseX, mouseY);
  particles.push(p);
}

function draw() {
  background(62, 98, 141);
  
  for(var i = particles.length-1; i >= 0; i--){
    particles[i].update();
    particles[i].display();
  }

  
//curtains
  //burnt orange- dark
    fill(143, 38, 28);
    quad(0, 0, 195, 0, 78, 234, 0, 234);
    quad(0, 234, 78, 234, 168, 660, 78, 698);
    fill(106, 21, 11);
    triangle(0,234, 78, 698, 0, 698);
  
  //curtain creases
    stroke(255);
    line(39, 65, 62, 173)
    noStroke();
    fill(212, 99, 62);
    quad(39, 65, 151, 0, 195, 0, 78, 234, 39, 65);

 /*
 
(1.) This is the first body from the left.
Each element is individually hardcoded and commented.

*/

// -------------------- Head (1.) ------------------------
  
  //forehead
    stroke(0);
    fill(108, 84, 86);
    ellipse(170,130, 45, 60);
    noStroke();
      
  //chin + jawline
    quad(146, 149, 192, 167, 186, 182, 153, 167);
      
  //fill in face
    rect(171, 133, 16, 33);
      
  //mouth
    stroke(0);
    triangle(190, 167.3, 187, 168, 189, 170);
    noStroke();
      
    //nose
    triangle(187, 124, 187, 165, 201, 165);
    
      //nose details
      stroke(0)
      line(191, 138, 201, 165);
      strokeWeight(2);
      line(195, 165, 201, 165);
       //nostril
      ellipse(192, 162.5, 7, 5);
      line(192, 164.5, 187, 182);
    
// -------------------- NECK/CHEST/BACK (1.) ------------------------

 //neck
    noStroke();
    quad(177, 192, 137, 174, 149, 126, 176, 126);
  

 //breatplates+ribs
    fill(23);
    quad(137, 175, 214, 230, 179, 189, 137, 175);
    fill(175);
    quad(197, 255, 196, 249, 155, 233, 180, 294);

 //shoulder
    fill(176, 109, 65);
    quad(137, 175, 97, 200, 191, 256, 215, 230);
  
// -------------------- ARM (1.) ------------------------

  //back-shoulder
    fill(185, 68, 39);
    quad(132, 178, 193, 327, 164, 375, 94, 200);
    noStroke();
  
  //bicep
    triangle(98, 204, 89, 272, 132, 292);
  
  //elbow
          // fill(191, 87, 68);
    triangle(127, 289,125, 305,94, 272);
  
  //forearm pt.1
          // fill(192, 100, 70);
    quad(94, 271, 80, 292, 118, 322, 125, 305);
  
  //forearm pt.2
    quad(80, 292, 118,322, 80, 410, 60, 394);
  
  //wrist
  // fill(255);
    triangle(66.1, 380.18, 61.71, 390, 65, 394 );
  
  //hand
  
 // -------------------- THIGH-LEFT (1.) ------------------------
 
  //upper-thigh
  fill('#C14928');
  quad(133, 519, 175, 380.18, 128, 292,80, 410);
  
  
 
}