let maxFrames = 1000;
let lifeSpan = 0;
let population;
let target;
let obstacles = [];
let cantObstacles = 400;

function setup(){
	createCanvas(1366, 771);
	population = new Population(1000, maxFrames, width/2, height-1, 50, 10);
	target = new Target(width/2, 50);
	for(let i = 0; i < cantObstacles; i++){
		obstacles[i] = new Obstacle(Math.random()*width, Math.random()*(height-100), 50);
		while(getDistance(target.x, target.y, obstacles[i].x, obstacles[i].y) < target.radius + obstacles[i].radius){
			obstacles[i] = new Obstacle(Math.random()*width, Math.random()*height, 50);
		}
	}
}

function draw(){
	calculateFrameRate();
	
	background(0);
	population.show();
	if(population.update(lifeSpan, maxFrames, target, obstacles) == 1){
		lifeSpan = 0;
	}
	target.show();
	for(let i = 0; i < cantObstacles; i++){
		obstacles[i].show();
	}
	logs();
	lifeSpan++;
}

function logs(){
	if(lifeSpan == maxFrames){
		console.log("Lifespan reached");
	}
}

function calculateFrameRate(){
	if(keyIsDown(48)){
		frameRate(1);
	}
	if(keyIsDown(49)){
		frameRate(10);
	}
	if(keyIsDown(50)){
		frameRate(20);
	}
	if(keyIsDown(51)){
		frameRate(30);
	}
	if(keyIsDown(52)){
		frameRate(40);
	}
	if(keyIsDown(53)){
		frameRate(50);
	}
	if(keyIsDown(54)){
		frameRate(60);
	}
}