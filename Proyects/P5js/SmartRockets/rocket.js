let width = 1366, height = 771;
let found = 0;
let equalRestarts = 0, lastClosest = 0;

class Rocket{
	constructor(x, y, maxFrames, w, h){
		this.x = x;
		this.y = y;
		this.vel = [0, 0];
		this.acc = [0, 0];
		this.dna = new DNA(maxFrames);
		this.w = w;
		this.h = h;
		this.lowest = -1;
		this.r = 255, this.g = 255, this.b = 255, this.t = 255;
	}

	applyForce(force){
		this.acc[0] += force[0];
		this.acc[1] += force[1];
	}

	collition(target){
		if(getDistance(this.x, this.y, target.x, target.y) < target.radius){
			return 1;
		}
		return 0;
	}

	update(lifeSpan, target, obstacles){
		let distanceTarget = getDistance(this.x, this.y, target.x, target.y)
		if(distanceTarget > 5000){
			return 0;
		}
		if(this.collition(target)){
			return 1;
		}
		for(let i = 0; i < 400; i++){
			let distance = getDistance(this.x, this.y, obstacles[i].x, obstacles[i].y)
			if(
				distance < obstacles[i].radius/2 ||
				this.x < 0 || this.x > width ||
				this.y < 0 || this.y > height
				){
				this.lowest = distanceTarget;
				this.x = 10000;
			}
		}
		if(lifeSpan < 1000){
			this.applyForce(this.dna.genes[lifeSpan]);
		}
		this.vel[0] += this.acc[0], this.vel[1] += this.acc[1];
		this.x += this.vel[0], this.y += this.vel[1];
		this.acc[0] = 0, this.acc[1] = 0;
		return 0;
	}

	show(){
		push();
		translate(this.x, this.y);
		let angleRadians = getRadians(this.vel);
		rotate(angleRadians);
		rectMode(CENTER);
		noStroke();
		fill(this.r, this.g, this.b, this.t);
		rect(0, 0, this.w, this.h);
		pop();
	}

	default(){
		this.x = width/2;
		this.y = height;
		this.vel = [0, 0];
		this.acc = [0, 0];
		this.lowest = -1;
	}
}

class Population{
	constructor(size, maxFrames, halfWidth, halfHeight, w, h){
		this.rockets = [];
		this.size = size;
		for(let i = 0; i < size; i++){
			this.rockets[i] = new Rocket(halfWidth, halfHeight, maxFrames, w, h);
		}
	}

	update(lifeSpan, maxFrames, target, obstacles){
		let prematureGeneration = 1;
		if(lifeSpan >= maxFrames){
			newGenerationWinnerless(this.rockets, this.size, target, maxFrames);
			return 1;
		}
		else{
			for(let i = 0; i < this.size; i++){
				if(this.rockets[i].update(lifeSpan, target, obstacles) == 1){
					newGeneration(this.rockets, this.size, lifeSpan, maxFrames, i);
					found = 1;
					return 1;
				}
				if(this.rockets[i].x < 5000){
					prematureGeneration = 0;
				}
			}
			if(prematureGeneration){
				newGenerationWinnerless(this.rockets, this.size, target, maxFrames);
				return 1;
			}
			return 0;
		}
	}

	show(){
		for(let i = 0; i < this.size; i++){
			this.rockets[i].show();
		}
	}
}

class DNA{
	constructor(maxFrames){
		this.genes = [];
		for(let i = 0; i < maxFrames; i++){
			this.genes[i] = [Math.random()*2-1, Math.random()*2-1];
		}
	}
}

function getRadians(vec){
	let vecEnd = Math.sqrt(vec[0]*vec[0]+vec[1]*vec[1]);
	let angleRadians = Math.acos(vec[0]/vecEnd);
	if((vec[0] < 0 && vec[1] < 0) || (vec[0] > 0 && vec[1] < 0)){
		angleRadians *= -1;
	}
	return angleRadians;
}

class Target{
	constructor(halfWidth, halfHeight){
		this.x = halfWidth;
		this.y = halfHeight;
		this.radius = 30;
	}

	show(){
		fill(255, 0, 0);
		ellipse(this.x, this.y, this.radius);
	}
}

function newGenerationWinnerless(rockets, size, target, maxFrames){
	let leastDistance = 1000000, leastDistanceIndex, distance;
	for(let i = 0; i < size; i++){
		if(rockets[i].lowest == -1){
			distance = getDistance(rockets[i].x, rockets[i].y, target.x, target.y);
		}
		else{
			distance = rockets[i].lowest;
		}
		if(distance < leastDistance){
			leastDistance = distance;
			leastDistanceIndex = i;
		}
	}
	if(leastDistance == lastClosest){
		equalRestarts++;
		if(equalRestarts == 5){
			console.log("PANIC");	
		}
	}
	else{
		lastClosest = leastDistance;
		equalRestarts = 0;
	}
	console.log("Closest: " + leastDistance);
	newGeneration(rockets, size, maxFrames, maxFrames, leastDistanceIndex);
}

function newGeneration(rockets, size, lifeSpan, maxFrames, index){
	let variation = 2, variationLow = 1, variationWon = 4, variationPanic = 4;
	let halfVariation = variation / 2, halfVariationWon = variationWon / 2, halfVariationPanic = variationPanic / 2, halfSize = size / 2, halfHalfSize = halfSize / 2, halfVariationLow = variationLow / 2;
	for(let i = 0; i < size; i++){
		for(let j = 0; j < maxFrames; j++){
			if(i != index){
				rockets[i].dna.genes[j][0] = rockets[index].dna.genes[j][0];
				rockets[i].dna.genes[j][1] = rockets[index].dna.genes[j][1];
				if(found){
					rockets[i].r = 255, rockets[i].g = 255, rockets[i].b = 255, rockets[i].t = 10;
					rockets[i].dna.genes[j][0] += (Math.random() * variationWon - halfVariationWon);
					rockets[i].dna.genes[j][1] += (Math.random() * variationWon - halfVariationWon);
				}
				else if(equalRestarts >= 5 && i > halfSize){
					rockets[i].r = 255, rockets[i].g = 0, rockets[i].b = 0, rockets[i].t = 100;
					rockets[i].dna.genes[j][0] += (Math.random() * variationPanic - halfVariationPanic);
					rockets[i].dna.genes[j][1] += (Math.random() * variationPanic - halfVariationPanic);
				}
				else if(i < halfSize){
					rockets[i].r = 0, rockets[i].g = 0, rockets[i].b = 255, rockets[i].t = 175;
					rockets[i].dna.genes[j][0] += (Math.random() * variationLow - halfVariationLow);
					rockets[i].dna.genes[j][1] += (Math.random() * variationLow - halfVariationLow);
				}
				else{
					rockets[i].r = 255, rockets[i].g = 255, rockets[i].b = 255, rockets[i].t = 10;
					rockets[i].dna.genes[j][0] += (Math.random() * variation - halfVariation);
					rockets[i].dna.genes[j][1] += (Math.random() * variation - halfVariation);
				}
				/*if(rockets[i].dna.genes[j][0] > 5){
					rockets[i].dna.genes[j][0] = 5;
				}
				if(rockets[i].dna.genes[j][1] > 5){
					rockets[i].dna.genes[j][1] = 5;
				}
				if(rockets[i].dna.genes[j][0] < 5){
					rockets[i].dna.genes[j][0] = 5;
				}
				if(rockets[i].dna.genes[j][1] < 5){
					rockets[i].dna.genes[j][1] = 5;
				}*/
			}
			else{
				rockets[i].r = 0, rockets[i].g = 255, rockets[i].b = 0, rockets[i].t = 255;
			}
			rockets[i].default();
		}
	}
	if(lifeSpan != maxFrames){
		console.log("Completed in: " + lifeSpan + " frames");
	}
	lifeSpan = 0;
}

function getDistance(x1, y1, x2, y2){
	let distanceX = Math.abs(x1 - x2);
	let distanceY = Math.abs(y1 - y2);
	let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
	return distance;
}

class Obstacle{
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.radius = r;
		this.r = Math.random()*255;
		this.g = Math.random()*255;
		this.b = Math.random()*255;
	}

	show(){
		fill(this.r, this.g, this.b, 123);
		ellipse(this.x, this.y, this.radius);
	}
}