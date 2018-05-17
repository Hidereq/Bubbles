let bubbles = [];
let isMouseOver;
let changedColor;
let numOfBubbles = 0;

function setup() {
		createCanvas(500, 400);
		isMouseOver = false;

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
		}

}

function mousePressed() {
		changedColor = false;
		for (i = 0; i < bubbles.length; i++) {
				bubbles[i].over(mouseX, mouseY);
				bubbles[i].changeColor();
			}
			if (changedColor == false) {
				let r = random(10, 50);
				let b = new Bubble(mouseX, mouseY, r, 150);
				bubbles.push(b);
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
			if (d < this.r) {
				isMouseOver = true;
				print("TRUE");
			} else {
				isMouseOver = false;
				print("FALSE");
			}
		}

		changeColor() {
			if (isMouseOver && this.c == 150) {
				this.c = 220;
				changedColor = true;
				print("CHANGED COLOR");
			} else if (isMouseOver && this.c == 220) {
				this.c = 150;
				changedColor = true;
				print("CHANGED COLOR");
			}
		}
}
