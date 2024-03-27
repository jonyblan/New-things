class Pixel {
    constructor(x, w, h, color) {
        this.x = x;
        this.y = 0;
        this.w = w;
        this.h = h;
        this.r = color; // Red color component
        this.g = color;   // Green color component
        this.b = color;   // Blue color component
    }

    show() {
		noStroke();
		fill(this.r, this.g, this.b); // Use pixel's color properties
		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);
	}
}
