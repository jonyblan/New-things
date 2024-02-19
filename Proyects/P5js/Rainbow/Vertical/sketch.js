// Declare any global variables here
let pixSize = 3;
let winHeight = 800;
let winWidth = 1400;
winHeight -= winHeight%pixSize;
winWidth -= winWidth%pixSize;
let cantPixX = winWidth/pixSize;
let cantPixY = winHeight/pixSize;
let pixels = [];
let variation = 2, vR = 1, vG = 2, vB = 3;
let cantFrames = 0;
let lastSecond = 0;
let thisSecond;
let brightness = 25;
let darkness = 230;
let upR = 1, upG = 1, upB = 1;


function setup() {
    createCanvas(winWidth, winHeight); // Adjust canvas size as needed
    // Only calculate values for pixels array once
    for (let i = 0; i < cantPixX; i++) { // Change condition from 'i * pixSize < cantPixX' to 'i < cantPixX'
        pixels[i] = new Pixel(i * pixSize, pixSize, winHeight, brightness+1);
    }
}

function draw(){
	for(let i = cantPixX-1; i >= 0; i--){
		if(i==0){
			pixels[i].r += variation*vR*upR;
			pixels[i].g += variation*vG*upG;
			pixels[i].b += variation*vB*upB;
			if (pixels[i].r >= darkness){
				upR = -1;
				pixels[i].r = darkness-5;
			}
			else if(pixels[i].r <= brightness){
				upR = 1;
				pixels[i].r = brightness+5;
			}
			if (pixels[i].g >= darkness){
				upG = -1;
				pixels[i].g = darkness-5;
			}
			else if(pixels[i].g <= brightness){
				upG = 1;
				pixels[i].g = brightness+5;
			}
			if (pixels[i].b >= darkness){
				upB = -1;
				pixels[i].b = darkness-5;
			}
			else if(pixels[i].b <= brightness){
				upB = 1;
				pixels[i].b = brightness+5;
			}
			pixels[i].show();
			console.log(pixels[0].r + " - " + pixels[0].g + " - " + pixels[0].b);
		}
		else{
			pixels[i].r = pixels[i-1].r;
			pixels[i].g = pixels[i-1].g;
			pixels[i].b = pixels[i-1].b;
			pixels[i].show();
		}
	}
	if(newSecond()){
		console.log(cantFrames);
		cantFrames = 0;
	}
}

function newSecond(){
	let currentTime = new Date();
	thisSecond = currentTime.getSeconds();
	if(thisSecond - lastSecond >= 1){
		lastSecond = thisSecond;
		return true;
	}
	cantFrames++;
	return false;
}