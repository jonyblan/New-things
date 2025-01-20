class Edge {
    constructor(node1, node2, index = 0, totalEdges = 1) {
        this.node1 = node1;
        this.node2 = node2;
        this.index = index; // Position of this edge among all edges between these nodes
        this.totalEdges = totalEdges; // Total number of edges between these nodes
    }

    draw() {
        const { x: x1, y: y1 } = this.node1;
        const { x: x2, y: y2 } = this.node2;

        // Check if the edge is a self-loop
        if (this.node1 === this.node2) {
            this.drawSelfLoop(x1, y1);
        } else {
            this.drawArc(x1, y1, x2, y2);
        }
    }

    drawSelfLoop(x, y) {
        const loopRadius = 30 + this.index * 10; // Radius of the loop, adjusted for multiple loops
        const offsetAngle = PI / 4; // Offset to position the loop to the side of the node

        noFill();
        stroke(255);
        strokeWeight(2);

        // Draw a circle tangent to the node's center
        const offsetX = loopRadius * cos(offsetAngle);
        const offsetY = loopRadius * sin(offsetAngle);
        ellipse(x + offsetX, y - offsetY, loopRadius * 2);
    }

    drawArc(x1, y1, x2, y2) {
        // Calculate midpoint and perpendicular offset
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const length = dist(x1, y1, x2, y2);
        const perpendicular = createVector(-dy / length, dx / length);

        // Offset magnitude based on the edge index
        const offsetMagnitude = 20 * Math.ceil(this.index / 2);
        const offsetDirection = this.index % 2 === 0 ? 1 : -1;
        const offset = p5.Vector.mult(perpendicular, offsetMagnitude * offsetDirection);

        const controlX = midX + offset.x;
        const controlY = midY + offset.y;

        noFill();
        stroke(255);
        strokeWeight(2);

        // Draw arc as a quadratic curve
        beginShape();
        vertex(x1, y1);
        quadraticVertex(controlX, controlY, x2, y2);
        endShape();
    }
}
