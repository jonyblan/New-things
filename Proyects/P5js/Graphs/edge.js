// Edge class (same as before)
class Edge {
    constructor(fromNode, toNode) {
        this.fromNode = fromNode;
        this.toNode = toNode;
    }

    draw() {
        stroke(255);
        line(this.fromNode.x, this.fromNode.y, this.toNode.x, this.toNode.y);
    }
}