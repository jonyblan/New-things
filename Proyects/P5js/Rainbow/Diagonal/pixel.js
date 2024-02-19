class Pixel {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = 123; // Red color component
        this.g = 123;   // Green color component
        this.b = 123;   // Blue color component
    }

    show() {
		noStroke();
		fill(this.r, this.g, this.b); // Use pixel's color properties
		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);
	}
}
