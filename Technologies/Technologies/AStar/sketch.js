// Change following values as you wish to
let rows = 5, cols = 5; 
//
let grid = [rows];
let openSet = [], closedSet = [];
let start, end;
let colWidth, rowHeight;
let aux;

function userValues(){ // change global values as you wish to
	start = grid[0][0];
	end = grid[rows - 1][cols - 1];
}

function setup(){
	createCanvas(800, 600);
	colWidth = width/cols, rowHeight = height/rows;

	for(let i = 0; i < rows; i++){
		grid[i] = [cols];
	}

	for(let i = 0; i*rowHeight < rows; i++){
		for(let j = 0; j*colWidth < cols; j++){
			grid[i][j] = new Cell(i*rowHeight, j*colWidth);
		}
	}

	userValues();
	
	aux = new Cell(200, 200);

	openSet.push(start);
}

function draw(){
	background(0);

	if(openSet.length <= 0){
		console.log("No solution");
		return ;
	}
	
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			aux.show();
			console.log("a");
			grid[i][j].show();
		}
	}

}

class Cell{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.f;
		this.g;
		this.h;
	}

	show(){
		fill(255);
		noStroke();
		rect(this.x, this.y, 10, 10);
	}
}