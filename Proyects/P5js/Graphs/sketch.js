let isDragging = false; // Track if dragging is active
let startX, startY; // Track the initial click position
let myButton;
let currentIndex = 0;
let nodePressed = null; // Initialize nodePressed with null
let myNode;

function setup() {
    createCanvas(windowWidth, windowHeight);
    myButton = new Button(100, 100, 150, 50, "Click Me", () => {
        console.log("Button clicked!");
    });
    myNode = new Node(200, 200, 30, currentIndex++);
}

function draw() {
    // Optional: Visual feedback during dragging
    background(0);
    myButton.draw(); // Draw the button
    myNode.draw();
    if (isDragging && nodePressed !== null) { // Ensure nodePressed is not null
        mouseDragged(); // Only call mouseDragged if nodePressed is valid
    }
}

function mousePressed() {
    // Start dragging
    isDragging = true;
    startX = mouseX;
    startY = mouseY;
    myButton.handleMousePressed();

    if (myNode.isHovered()) {
        nodePressed = myNode; // Only assign if hovered
        console.log("Node pressed:", nodePressed);
    }
}

function mouseDragged() {
    if (nodePressed) { // Check that nodePressed is not null
        nodePressed.x = mouseX;
        nodePressed.y = mouseY;
    }
}

function mouseReleased() {
    // End dragging
    isDragging = false;
    nodePressed = null; // Reset nodePressed to null when released
}
