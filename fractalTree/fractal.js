let ø;

function setup() {
  createCanvas(1310, 660);
}

// Draw function constantly looping
function draw() {
  background(20);
  frameRate(30);
  stroke(255);

  // Movement with mouse
  let a = (mouseX / width) * 90;
  ø = radians(a);

  /* Change in color effect:
   * Initiates the color as red, and slowly increases the RGB value untill it starts
   * to become white. Then, restarts the cycle with another color to maintain a clear
   * transition.
   */
  if (mouseX > 100 && mouseX < 500) {
    stroke(mouseX * 10, mouseX / 5, mouseX * 2);
  } else if (mouseX < 101) {
    stroke(255, 0, 0);
  } else if (mouseX > 500 && mouseX < 700) {
    stroke(110, 230 - 1, mouseX - 200);
  } else {
    stroke(50, 255, 20);
  }

  /*
   *  Height goes from top of the y-axis to the bottom
   *  So, we draww a straight line of 200 pixels at the
   *  bottom to be our initial branch
   */
  translate(width / 2, height);
  // Draw a line 200 pixels
  line(0, 0, 0, -200);
  // Move to the end of that line
  translate(0, -200);
  // Start the recursive branching!
  branch(200);
}

function branch(height) {
  height *= 2 / 3;

  if (height > 2) {
    // Left Branch
    push();
    rotate(ø); // Rotate by theta
    line(0, 0, 0, -height); // Draw the branch
    translate(0, -height); // Move to the end of the branch
    branch(height);
    pop();

    // Right Branch
    push();
    rotate(-ø);
    line(0, 0, 0, -height);
    translate(0, -height);
    branch(height);
    pop();
  }
}

/* This code was inspired by the p5.js Library reference.
 * Visit p5js.org to see more!
 */
