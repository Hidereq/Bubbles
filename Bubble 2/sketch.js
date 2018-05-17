let bubbles = [];
let numOfBubbles = 10;

function setup() {
	createCanvas(500, 400);
	for (i = 0; i<numOfBubbles; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(10, 50);
		let b = new Bubble(x, y, r, 150);
		bubbles.push(b);
	}

}

function draw() {
	background(150);
	for (i = 0; i < bubbles.length; i++) {
		bubbles[i].show();
		bubbles[i].move();
		bubbles[i].edges();
		if (bubbles[i].over(mouseX, mouseY))
		bubbles[i].changeColor(200);
		else bubbles[i].changeColor(150);
	}

}

function mousePressed() {
	for (i = bubbles.length - 1; i >= 0; i--) {
		if (bubbles[i].over(mouseX, mouseY))
		bubbles.splice(i, 1);
	}
}

class Bubble {
	constructor(x, y, r, color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.c = color;
	}
	move() {
		this.x = this.x + random(-3,3);
		this.y = this.y + random(-3,3);
	}
	show() {
		strokeWeight(2);
		fill(this.c, 125);
		ellipse(this.x, this.y, this.r*2);
	}

	edges() {
		if ((this.x - this.r) < 0) this.x = this.r;
		if ((this.x + this.r) > width) this.x = width-this.r;
		if ((this.y - this.r) < 0) this.y = this.r;
		if ((this.y + this.r) > height) this.y = height-this.r;
	}

	over(px, py) {
		let d = dist(px, py, this.x, this.y);
		return (d < this.r);
	}

	changeColor(c) {
		this.c = c;
	}
}
