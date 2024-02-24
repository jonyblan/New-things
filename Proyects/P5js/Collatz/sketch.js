let maxX = 800, maxY = 600;

let currentStartingNumber = 7;
let currentNumber;
let previousNumber

function setup(){
	createCanvas(maxX, maxY);
	background(0);
}

function draw(){
	if(currentStartingNumber > maxY){
		console.log(currentStartingNumber);
		noLoop();
	}
	previousNumber = currentStartingNumber;
	currentNumber = currentStartingNumber;
	for(let countSteps = 1; countSteps < maxX; countSteps++){
		console.log(currentNumber);
		if(currentNumber == 1){
			break;
		}
		if(!(currentNumber % 2)){
			currentNumber /= 2;
		}
		else{
			currentNumber = currentNumber * 3 + 1;
		}
		stroke(255, 0, 0, 1);
		strokeWeight(2);
		line(countSteps*6 - 1, height - previousNumber/30, countSteps*6, height - currentNumber/30);
		previousNumber = currentNumber;
	}

	currentStartingNumber++;
}