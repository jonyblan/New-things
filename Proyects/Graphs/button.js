class Button {
    constructor(x, y, width, height, label, onClick) {
        this.x = x; // Position on the canvas
        this.y = y;
        this.width = width; // Dimensions
        this.height = height;
        this.label = label; // Text displayed on the button
        this.onClick = onClick; // Function to call when clicked
    }

    draw() {
        // Draw the button
        fill(200); // Button color
        stroke(0);
        rect(this.x, this.y, this.width, this.height);

        // Draw the label
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        text(this.label, this.x + this.width / 2, this.y + this.height / 2);
    }

    isHovered() {
        // Check if the mouse is over the button
        return 	mouseX > this.x && mouseX < this.x + this.width &&
				mouseY > this.y && mouseY < this.y + this.height;
    }

    handleMousePressed() {
        // Check if clicked
        if (this.isHovered() && this.onClick) {
            this.onClick(); // Call the assigned function
        }
    }
}