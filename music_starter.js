// let backgd1;
// let backgd2;
// let firstRun = true;

// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   if (firstRun) {
//     backgd1 = loadImage('backgd1.png'); // Background for verse
//     backgd2 = loadImage('backgd2.jpg'); // Background for chorus
//     firstRun = false;
//   }

//   textFont('Brush Script MT'); // Soft and romantic font
//   rectMode(CENTER);
//   textSize(24);

//   // Lyrics for the background change
//   let chorusLyrics = [
//     "You get ready, you get all dressed up",
//     "To go nowhere in particular",
//     "Back to work or the coffee shop",
//     "Doesn't matter 'cause it's enough",
//     "To be young and in lo-ove",
//     "To be young and in lo-ove"
//   ];

//   // Check if current lyrics match the chorus
//   let inChorus = chorusLyrics.some(lyric => words.includes(lyric));

//   // Switch background based on the lyrics
//   if (inChorus) {
//     background(backgd2); // Change to chorus background
//   } else {
//     background(backgd1); // Default verse background
//   }

//   // Heavenly glow-like organic shapes reacting to vocals
//   noStroke();
//   let highlight = map(vocal, 0, 100, 150, 255); // Heavenly glow
//   fill(255, highlight, highlight, 100); // Soft pink/white glow with transparency, reduced opacity for smoothness
//   let sizeFactor = map(vocal, 0, 100, 150, 300); // Keep size within reasonable range for smoother transitions
//   ellipse(width / 2, height / 2, sizeFactor, sizeFactor); // Large glowing organic shape

//   // Organic flowing shapes for other audio channels
//   fill(255, 200, 250, 100); // Soft pastel pink
//   for (let i = 0; i < 5; i++) {
//     let xOff = sin(counter * 0.05 + i) * 100; // Reduced offset for smoother movement
//     let yOff = cos(counter * 0.03 + i) * 100;
//     ellipse(width / 2 + xOff, height / 2 + yOff, other * 1.5, other * 1.5); // Organic, floating shapes with softer movement
//   }

//   // Floating, cloud-like shapes based on the "bass" channel
//   fill(240, 180, 255, 70); // Soft purple for bass
//   for (let i = 0; i < 3; i++) {
//     let bassFactor = bass * 1.2; // Keep the scale changes subtle
//     let xBass = map(sin(counter * 0.01 + i), -1, 1, 0, width);
//     let yBass = map(cos(counter * 0.01 + i), -1, 1, 0, height);
//     ellipse(xBass, yBass, bassFactor, bassFactor); // Soft cloud-like shapes with subtle motion
//   }

//   // Display the words softly and organically
//   textAlign(CENTER);
//   textSize(32); // Larger text size for emphasis
//   fill(255, 255, 240, 150); // Soft yellow/white text for a heavenly glow
//   text(words, width / 2, height / 3);
// }

let backgd1, backgd2;
let firstRun = true;
let usingChorusBackground = false; // Tracks which background is being used

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // Load backgrounds on the first run
  if (firstRun) {
    backgd1 = loadImage('backgd1.png'); // Background for verse
    backgd2 = loadImage('backgd2.png'); // Background for chorus
    firstRun = false;
  }

  textFont('Brush Script MT'); // Soft and romantic font

  // Check for specific words to switch backgrounds
  if (words.includes("You ")) {
    usingChorusBackground = true;  // Switch to chorus background when "You" is detected
  } else if (words.includes("Look")) {
    usingChorusBackground = false;  // Switch back to verse background when "Look" is detected
  }

  // Set the background based on the current state
  if (usingChorusBackground) {
    background(backgd2); // Chorus background
  } else {
    background(backgd1); // Verse background
  }

  // Heavenly glow-like organic shapes reacting to vocals
  noStroke();
  let highlight = map(vocal, 0, 100, 150, 255); // Heavenly glow
  fill(255, highlight, highlight, 15); // Soft pink/white glow with transparency, reduced opacity for smoothness
  let sizeFactor = map(vocal, 0, 100, 150, 300); // Keep size within reasonable range for smoother transitions
  ellipse(width / 2, height / 2, sizeFactor, sizeFactor); // Large glowing organic shape

  // Organic flowing shapes for other audio channels
  fill(226, 194, 175, 20); // dusty rose
  for (let i = 0; i < 5; i++) {
    let xOff = sin(counter * 0.05 + i) * 100; // Reduced offset for smoother movement
    let yOff = cos(counter * 0.03 + i) * 100;
    ellipse(width / 2 + xOff, height / 2 + yOff, other * 1.5, other * 1.5); // Organic, floating shapes with softer movement
  }

  // Floating, cloud-like shapes based on the "bass" channel
  fill(171, 195, 204, 30); // muted blue
  for (let i = 0; i < 3; i++) {
    let bassFactor = bass * 1.2; // Keep the scale changes subtle
    let xBass = map(sin(counter * 0.01 + i), -1, 1, 0, width);
    let yBass = map(cos(counter * 0.01 + i), -1, 1, 0, height);
    ellipse(xBass, yBass, bassFactor, bassFactor); // Soft cloud-like shapes with subtle motion
  }

  // Floating and dancing squiggly lines
  strokeWeight(2);
  noFill();
  stroke(255, 200, 200, 150); // Soft pinkish color for the lines
  let numLines = 2;
  let waveFrequency = vocal; // Frequency of the wave
  let waveAmplitude = 50; // Amplitude of the wave
  let speed = 5; // Speed of the wave movement
  
  for (let i = 0; i < numLines; i++) {
    beginShape();
    for (let t = 0; t <= width; t += 10) {
      let x = t;
      let y = height / 2 + sin((counter * speed) + (t * waveFrequency) + (i * PI / numLines)) * waveAmplitude;
      vertex(x, y);
    }
    endShape();
  }

  // Display the words softly and organically
  textAlign(CENTER);
  textSize(50); // Larger text size for emphasis
  fill(255, 255, 240, 150); // Soft yellow/white text for a heavenly glow
  text(words, width / 2, height / 3);
  
}

