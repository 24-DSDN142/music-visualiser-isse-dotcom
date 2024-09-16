
// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //background(20)
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);
  
  // let eyebrowSize = map(drum, 0, 100, 630, 400);
  // let backCol = map(drum, 0, 100, 0, 255);
  // background(backCol)
  // ellipse(150, 250, 100, 100);
  // ellipse(350, 250, 100, 100);
  // strokeWeight(5);
  // stroke(255);
  // noFill();
  // arc(150,vocal,150,30,180,0);
  // arc(350,vocal,150,30,180,0);
  // arc(260,310,300,300,30,150);


//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }
// // Function to draw one frame of the visualization
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   textFont('Brush Script MT'); // Use CSS safe fonts
//   rectMode(CENTER);
//   textSize(24);

//   // Map drum volume to background color
//   let backCol = map(drum, 0, 100, 0, 255);
//   background(backCol);

//   // Draw ellipses
//   ellipse(150, 250, 100, 100);
//   ellipse(350, 250, 100, 100);

//   // Draw arcs with dynamic position
//   strokeWeight(5);
//   stroke(255);
//   noFill();
//   arc(150, 250, 150, 30, PI, 0); // Center y fixed for visual alignment
//   arc(350, 250, 150, 30, PI, 0);
//   arc(260, 310, 300, 300, 30, 150);

//   // Bar chart visualization
//   let bar_spacing = height / 10;
//   let bar_height = width / 12;
//   let bar_pos_x = width / 2;

//   // Vocal bar (red)
//   fill(200, 0, 0);
//   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//   fill(0);
//   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

//   // Drum bar (green)
//   fill(0, 200, 0);
//   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//   fill(0);
//   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

//   // Bass bar (blue)
//   fill(50, 50, 240);
//   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//   fill(0);
//   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

//   // Other bar (white)
//   fill(200, 200, 200);
//   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//   fill(0);
//   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);

//   // Display "words" in the center of the canvas
//   textAlign(CENTER);
//   textSize(32); // Fixed text size for readability
//   fill(255, 255, 0); // Yellow color for contrast
//   text(words, width / 2, height / 3);
// }

// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   textFont('Brush Script MT'); // Soft and romantic font
//   rectMode(CENTER);
//   textSize(50);

//   // Map drum volume to background gradient for a dreamy effect
//   let backCol = map(drum, 0, 100, 100, 255); // Soft, light colors
//   let highlight = map(vocal, 0, 100, 150, 255); // Heavenly glow
//   background(lerpColor(color(255, 200, 255), color(200, 150, 255), backCol / 255)); // Soft gradient background

//   // Heavenly glow-like organic shapes reacting to vocals
//   noStroke();
//   fill(255, highlight, highlight, 80); // Soft pink/white glow with transparency
//   let sizeFactor = map(vocal, 0, 100, 50, 400); // Size changes based on vocals
//   ellipse(width / 2, height / 2, sizeFactor, sizeFactor); // Large glowing organic shape

//   // Organic flowing shapes for other audio channels
//   fill(255, 200, 250, 100); // Soft pastel pink
//   for (let i = 0; i < 5; i++) {
//     let xOff = sin(counter * 0.05 + i) * 150;
//     let yOff = cos(counter * 0.03 + i) * 150;
//     ellipse(width / 2 + xOff, height / 2 + yOff, other * 2, other * 2); // Organic, floating shapes
//   }

//   // Floating, cloud-like shapes based on the "bass" channel
//   fill(240, 180, 255, 70); // Soft purple for bass
//   for (let i = 0; i < 3; i++) {
//     let bassFactor = bass * 1.5;
//     let xBass = map(sin(counter * 0.01 + i), -1, 1, 0, width);
//     let yBass = map(cos(counter * 0.01 + i), -1, 1, 0, height);
//     ellipse(xBass, yBass, bassFactor, bassFactor); // Soft cloud-like shapes
//   }

//   // Gentle pulse for the "drum" volume, keeping it soft and rhythmic
//   fill(255, 255, 255, 60); // White, soft glow
//   let pulseSize = map(drum, 0, 100, 50, 300); // Pulse grows with drum volume
//   ellipse(width / 2, height / 2, pulseSize, pulseSize); // Central pulse effect

//   // Display the words softly and organically
//   textAlign(CENTER);
//   textSize(32); // Larger text size for emphasis
//   fill(255, 255, 240, 150); // Soft yellow/white text for a heavenly glow
//   text(words, width / 2, height / 3);
// }

let backgd1, bckgd2;

function preload() {
  // Preload the two backgrounds
  backgd1 = loadImage('backgd1.png'); // Background for verse
  bckgd2 = loadImage('backgd2.png'); // Background for chorus
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Brush Script MT'); // Soft and romantic font
  rectMode(CENTER);
  textSize(24);

  // Transition between backgrounds for verse/chorus
  if (counter % 2 === 0) {
    background(backgd1); // Verse background
  } else {
    background(bckgd2); // Chorus background
  }

  // Heavenly glow-like organic shapes reacting to vocals
  noStroke();
  let highlight = map(vocal, 0, 100, 150, 255); // Heavenly glow
  fill(255, highlight, highlight, 80); // Soft pink/white glow with transparency
  let sizeFactor = map(vocal, 0, 100, 50, 400); // Size changes based on vocals
  ellipse(width / 2, height / 2, sizeFactor, sizeFactor); // Large glowing organic shape

  // Organic flowing shapes for other audio channels
  fill(255, 200, 250, 100); // Soft pastel pink
  for (let i = 0; i < 5; i++) {
    let xOff = sin(counter * 0.05 + i) * 150;
    let yOff = cos(counter * 0.03 + i) * 150;
    ellipse(width / 2 + xOff, height / 2 + yOff, other * 2, other * 2); // Organic, floating shapes
  }

  // Floating, cloud-like shapes based on the "bass" channel
  fill(240, 180, 255, 70); // Soft purple for bass
  for (let i = 0; i < 3; i++) {
    let bassFactor = bass * 1.5;
    let xBass = map(sin(counter * 0.01 + i), -1, 1, 0, width);
    let yBass = map(cos(counter * 0.01 + i), -1, 1, 0, height);
    ellipse(xBass, yBass, bassFactor, bassFactor); // Soft cloud-like shapes
  }

  // Gentle pulse for the "drum" volume, keeping it soft and rhythmic
  fill(255, 255, 255, 60); // White, soft glow
  let pulseSize = map(drum, 0, 100, 50, 300); // Pulse grows with drum volume
  ellipse(width / 2, height / 2, pulseSize, pulseSize); // Central pulse effect

  // Display the words softly and organically
  textAlign(CENTER);
  textSize(32); // Larger text size for emphasis
  fill(255, 255, 240, 150); // Soft yellow/white text for a heavenly glow
  text(words, width / 2, height / 3);
}
