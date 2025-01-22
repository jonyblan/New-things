// Represents an edge between two nodes
class Edge {
    constructor(node1, node2, index = 0, totalEdges = 1) {
        this.node1 = node1; // The starting node of the edge
        this.node2 = node2; // The ending node of the edge
        this.index = index; // Position of this edge among all edges between these nodes
        this.totalEdges = totalEdges; // Total number of edges between these nodes
    }

    // Public method to draw the edge (either straight or a loop)
    draw(directed) {
        const { x: x1, y: y1 } = this.node1;
        const { x: x2, y: y2 } = this.node2;

        if (this.isSelfLoop()) {
            this.drawSelfLoop(x1, y1);
        } else {
            this.drawStraightLine(x1, y1, x2, y2, directed);
        }
    }

    // Checks if the edge is a self-loop (i.e., connects a node to itself)
    isSelfLoop() {
        return this.node1 === this.node2;
    }

    // Draws a straight line between two nodes, with optional direction and offset for multiple edges
    drawStraightLine(x1, y1, x2, y2, directed) {
        const { startX, startY, endX, endY } = this.getAdjustedLineEndpoints(x1, y1, x2, y2);
        const { offsetStartX, offsetStartY, offsetEndX, offsetEndY } = this.getOffsetLine(startX, startY, endX, endY);

        stroke(255);
        strokeWeight(2);
        line(offsetStartX, offsetStartY, offsetEndX, offsetEndY);

        if (directed) {
            this.drawArrowhead(offsetEndX, offsetEndY, x2 - x1, y2 - y1);
        }
    }

    // Adjusts the line endpoints to stop at the edge of the nodes instead of their centers
    getAdjustedLineEndpoints(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = dist(x1, y1, x2, y2);

        return {
            startX: x1 + (this.node1.radius / distance) * dx,
            startY: y1 + (this.node1.radius / distance) * dy,
            endX: x2 - (this.node2.radius / distance) * dx,
            endY: y2 - (this.node2.radius / distance) * dy
        };
    }

    // Adds an offset to the line for drawing multiple edges between the same pair of nodes
    getOffsetLine(startX, startY, endX, endY) {
        const dx = endX - startX;
        const dy = endY - startY;
        const distance = dist(startX, startY, endX, endY);

        const perpendicular = createVector(-dy / distance, dx / distance);
        const offsetMagnitude = 10 * Math.ceil(this.index / 2); // Offset size increases with edge index
        const offsetDirection = this.index % 2 === 0 ? 1 : -1; // Alternate offset directions
        const offset = p5.Vector.mult(perpendicular, offsetMagnitude * offsetDirection);

        return {
            offsetStartX: startX + offset.x,
            offsetStartY: startY + offset.y,
            offsetEndX: endX + offset.x,
            offsetEndY: endY + offset.y
        };
    }

    // Draws a self-loop (a circular edge connecting a node to itself)
    drawSelfLoop(x, y) {
        const loopRadius = 30 + this.index * 10; // Loop radius increases for multiple loops
        const offsetAngle = PI / 4; // Positions the loop to the side of the node

        noFill();
        stroke(255);
        strokeWeight(2);

        const offsetX = loopRadius * cos(offsetAngle);
        const offsetY = loopRadius * sin(offsetAngle);
        ellipse(x + offsetX, y - offsetY, loopRadius * 2);
    }

    // Draws an arrowhead to indicate the direction of the edge
    drawArrowhead(x, y, dx, dy) {
        const arrowSize = 10;
        const angle = atan2(dy, dx); // Angle of the arrow based on the direction vector

        fill(255);
        noStroke();

        push();
        translate(x, y);
        rotate(angle);
        beginShape();
        vertex(0, 0);
        vertex(-arrowSize, arrowSize / 2);
        vertex(-arrowSize, -arrowSize / 2);
        endShape(CLOSE);
        pop();
    }
}
