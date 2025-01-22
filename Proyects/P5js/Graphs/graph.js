class Graph {
    constructor(params) {
        this.nodes = [];
        this.edges = [];
        this.selectedNode = null; // Track selected node
        this.edgeMode = null; // Can be 'add' or 'delete'
		this.index = 0;
		
		this.directed = params.directed;
        this.loop = params.loop;
        this.multiEdge = params.multiedge;
        this.weight = params.weighted;
    }

    /**
     * Adds a new node to the graph.
     * @param {number} x - The x-coordinate of the node.
     * @param {number} y - The y-coordinate of the node.
     * @param {number} radius - The radius of the node.
     */
    addNode(x, y, radius) {
        const newNode = new Node(x, y, radius, this.index++);
        this.nodes.push(newNode);
        console.log(`Node added: ${newNode.label}`);
    }

    /**
     * Draws the graph, including all edges, nodes, and highlights for selected nodes.
     */
    draw() {
        // Draw all edges first, so nodes appear on top
        this.edges.forEach(edge => edge.draw(this.directed));

        // Draw all nodes
        this.nodes.forEach(node => node.draw());

        // Highlight the selected node, if any
        this.highlightSelectedNode();
    }

	/**
     * Highlights the currently selected node with a green outline.
     */
    highlightSelectedNode() {
        if (this.selectedNode) {
            noFill();
            stroke(0, 255, 0); // Green outline
            strokeWeight(3);
            ellipse(
                this.selectedNode.x,
                this.selectedNode.y,
                this.selectedNode.radius * 2 + 6 // Slightly larger than the node's radius
            );
        }
    }
	

    handleMousePressed(event) {
		if (event.button === 2) {
			// Do nothing here to prevent handling right-click (it's already handled in sketch.js)
			return;
		}
	
		let clickedNode = null;
	
		this.nodes.forEach(node => {
			if (node.isHovered()) {
				clickedNode = node;
			}
		});
	
		if (!clickedNode) {
			return;
		}
		console.log(`Node pressed: ${clickedNode.label}`);
	
		// If we're in add mode, check if this is the second node to create an edge
		if (this.edgeMode === "add") {
			if (this.loop || this.selectedNode !== clickedNode) {
				this.addEdge(clickedNode);
			}
			this.selectedNode = null;
			this.edgeMode = null;
		}
	
		// If we're in delete mode, remove the edge between the selected node and clicked node
		else if (this.edgeMode === "delete") {
			if (this.loop || this.selectedNode !== clickedNode) {
				this.deleteEdge(clickedNode);
			}
			this.selectedNode = null;
			this.edgeMode = null;
		}
	
		// If the node clicked is the same as the selected one, deselect it
		else if (this.selectedNode === clickedNode) {
			this.deselectNode(clickedNode);
		}
	
		// If none of those actions were done, select the node
		else {
			this.selectNode(clickedNode);
		}
	}
	
	
	
	selectNode(clickedNode){
		console.log("Selected node:", clickedNode.label);
		this.selectedNode = clickedNode;
	}

	deselectNode(clickedNode){
		console.log("Deselected node:", clickedNode.label);
		this.selectedNode = null; // Deselect
	}

	/**
     * Adds an edge between the selected node and a clicked node.
     * Handles both self-loops and regular edges, ensuring the graph's constraints are respected.
     * @param {Node} clickedNode - The node to connect with the selected node.
     */
    addEdge(clickedNode) {
        if (!this.selectedNode) return;

        // Check for existing edges between the two nodes
        const existingEdges = this.getEdgesBetweenNodes(this.selectedNode, clickedNode);

        // Prevent adding edges if multi-edges are disabled and an edge already exists
        if (existingEdges.length > 0 && !this.multiEdge) {
            console.log("Edge creation aborted: Multi-edges not allowed.");
            this.clearEdgeMode();
            return;
        }

        const totalEdges = existingEdges.length + 1;

        // Update indices for existing edges to reflect the new total
        existingEdges.forEach((edge, index) => {
            edge.index = index + 1;
            edge.totalEdges = totalEdges;
        });

        // Create a new edge, respecting self-loops and directed graph rules
        const newEdge = (this.selectedNode === clickedNode || this.directed)
            ? new Edge(this.selectedNode, clickedNode)
            : new Edge(...[this.selectedNode, clickedNode].sort((a, b) => a.label - b.label));

        this.edges.push(newEdge);

        console.log(`Edge created: ${this.selectedNode.label} -> ${clickedNode.label}`);
        this.clearEdgeMode();
    }
	
	/**
     * Deletes the most recently added edge between the selected node and a clicked node.
     * Handles both directed and undirected graphs, ensuring indices are updated.
     * @param {Node} clickedNode - The node to disconnect from the selected node.
     */
    deleteEdge(clickedNode) {
        if (!this.selectedNode || !clickedNode) return;

        // Determine the pair of nodes based on graph type
        const nodePair = this.directed
            ? [this.selectedNode, clickedNode]
            : [this.selectedNode, clickedNode].sort((a, b) => a.label - b.label);

        // Get all edges between the selected nodes
        const edgesBetweenNodes = this.getEdgesBetweenNodes(...nodePair);

        if (edgesBetweenNodes.length > 0) {
            // Remove the last edge (most recently added)
            const edgeToDelete = edgesBetweenNodes.pop();
            this.edges = this.edges.filter(edge => edge !== edgeToDelete);
            console.log(`Edge deleted: ${nodePair[0].label} -> ${nodePair[1].label}`);

            // Update indices for remaining edges between these nodes
            edgesBetweenNodes.forEach((edge, index) => {
                edge.index = index + 1;
                edge.totalEdges = edgesBetweenNodes.length;
            });
        }

        this.clearEdgeMode();
    }

	/**
     * Activates the edge mode, determining whether edges are being added or deleted.
     * @param {string} action - The action to perform ('add' or 'delete').
     */
    activateEdgeMode(action) {
        if (action === "add" || action === "delete") {
            console.log(`Edge mode activated: ${action}`);
            this.edgeMode = action;
        }
    }

    /**
     * Deletes a node from the graph and all associated edges.
     * @param {Node} nodeToDelete - The node to be deleted.
     */
    deleteNode(nodeToDelete) {
        // Remove the node from the list of nodes
        this.nodes = this.nodes.filter(node => node !== nodeToDelete);

        // Remove all edges connected to the node
        this.edges = this.edges.filter(
            edge => edge.node1 !== nodeToDelete && edge.node2 !== nodeToDelete
        );

        // If the deleted node was selected, clear the selection
        if (this.selectedNode === nodeToDelete) {
            console.log("Selected node deleted, resetting selection.");
            this.selectedNode = null;
        }

        // Reset edge mode, if applicable
        this.edgeMode = null;

        console.log(`Node deleted: ${nodeToDelete.label}`);
    }

	/**
     * Clears the current edge mode and resets the selected node.
     */
    clearEdgeMode() {
        this.selectedNode = null;
        this.edgeMode = null;
    }

	/**
     * Gets all edges between two nodes, considering directed or undirected graph rules.
     * @param {Node} node1 - The first node.
     * @param {Node} node2 - The second node.
     * @returns {Edge[]} - An array of edges between the two nodes.
     */
    getEdgesBetweenNodes(node1, node2) {
        return this.edges.filter(edge =>
            this.directed
                ? edge.node1 === node1 && edge.node2 === node2
                : [edge.node1, edge.node2].sort((a, b) => a.label - b.label)
                    .every((node, index) => [node1, node2].sort((a, b) => a.label - b.label)[index] === node)
        );
    }

	/**
     * Displays a context menu near the clicked node with a list of actions.
     * @param {Node} clickedNode - The node for which the context menu is being shown.
     */
    showContextMenu(clickedNode) {
        const buttonColor = '#32CD32'; // Define the button color here (light green)

        // Create a container for the context menu
        const menuContainer = this.createMenuContainer(clickedNode);

        // Define the buttons and their corresponding actions
        const menuOptions = [
            { label: 'Delete Node', action: () => this.deleteNode(clickedNode) },
            { label: 'View Info', action: () => this.showModal(`Node Info: ${clickedNode.label}`) },
            { label: 'Custom Action', action: () => this.doSomething('Custom action triggered!') }
        ];

        // Create buttons for each menu option
        menuOptions.forEach(option => this.createMenuButton(option.label, option.action, buttonColor, menuContainer));

        // Close the menu when clicking anywhere outside
        this.addCloseListener(menuContainer);
    }

	/**
     * Creates the container element for the context menu.
     * @param {Node} clickedNode - The node near which the context menu should appear.
     * @returns {HTMLElement} The context menu container.
     */
    createMenuContainer(clickedNode) {
        return createDiv()
            .style('position', 'absolute')
            .style('top', `${clickedNode.y + 20}px`) // Position slightly below the node
            .style('left', `${clickedNode.x + 20}px`) // Position slightly to the right of the node
            .style('background-color', '#FFF')
            .style('border', '1px solid #000')
            .style('padding', '10px')
            .style('border-radius', '8px')
            .style('box-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)')
            .style('z-index', '10')
            .style('display', 'flex')
            .style('flex-direction', 'column'); // Stack buttons vertically
    }

	/**
     * Creates a button for the context menu.
     * @param {string} label - The label for the button.
     * @param {Function} action - The action to perform when the button is clicked.
     * @param {string} buttonColor - The background color of the button.
     * @param {HTMLElement} parentContainer - The parent container to which the button will be added.
     */
    createMenuButton(label, action, buttonColor, parentContainer) {
        createButton(label)
            .mousePressed(() => {
                action();
                parentContainer.remove(); // Close the menu after an action is triggered
            })
            .style('padding', '5px 10px')
            .style('margin', '3px 0') // Reduced vertical space
            .style('background-color', buttonColor)
            .style('color', '#fff')
            .style('border', 'none')
            .style('border-radius', '5px')
            .parent(parentContainer);
    }
	
	/**
     * Adds a listener to close the context menu when clicking outside of it.
     * @param {HTMLElement} menuContainer - The container of the context menu.
     */
    addCloseListener(menuContainer) {
        const closeMenu = (event) => {
            if (!menuContainer.elt.contains(event.target)) {
                menuContainer.remove();
                document.removeEventListener('click', closeMenu); // Remove listener to prevent memory leaks
            }
        };

        // Attach the event listener
        document.addEventListener('click', closeMenu);
    }
	
	/**
     * Logs a custom message or performs an action based on the context menu.
     * @param {string} message - The message or action to process.
     */
    doSomething(message) {
        console.log(message); // Log the action
        this.showModal(message); // Display the message in a modal
    }
	
	/**
     * Displays a modal with a custom message.
     * @param {string} message - The message to display.
     */
    showModal(message) {
        // Create the modal container
        const modalContainer = createDiv()
            .style('position', 'fixed')
            .style('top', '50%')
            .style('left', '50%')
            .style('transform', 'translate(-50%, -50%)')
            .style('background-color', '#FFF')
            .style('border', '1px solid #000')
            .style('padding', '20px')
            .style('border-radius', '10px')
            .style('box-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)')
            .style('z-index', '1000');

        // Add the message
        createDiv(message)
            .style('margin-bottom', '15px')
            .style('font-size', '16px')
            .parent(modalContainer);

        // Add a "Close" button
        createButton('Close')
            .style('padding', '5px 10px')
            .style('background-color', '#FF6347') // Tomato color for the button
            .style('color', '#FFF')
            .style('border', 'none')
            .style('border-radius', '5px')
            .parent(modalContainer)
            .mousePressed(() => modalContainer.remove());
    }

    /**
     * Handles the dragging of a node with the mouse.
     * @param {Node} node - The node being dragged.
     */
    handleMouseDragged(node) {
        if (!node) return;
        node.x = mouseX;
        node.y = mouseY;
    }
}
