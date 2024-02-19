// Declare any global variables here
let pixSize = 8;
let winHeight = 800;
let winWidth = 1400;
winHeight -= winHeight%pixSize;
winWidth -= winWidth%pixSize;
let cantPixX = winWidth/pixSize;
let cantPixY = winHeight/pixSize;
let pixels = [];
let variation = 1;
let cantFrames = 0;
let lastSecond = 0;
let thisSecond;
let brightness = 0;
let darkness = 255;
let upR = 1, upG = 1, upB = 1;

function setup() {
    createCanvas(winWidth, winHeight); // Adjust canvas size as needed
    // Only calculate values for pixels array once
    for (let i = 0; i < cantPixX; i++) { // Change condition from 'i * pixSize < cantPixX' to 'i < cantPixX'
        pixels[i] = [];
        for (let j = 0; j < cantPixY; j++) { // Change condition from 'j * pixSize < cantPixY' to 'j < cantPixY'
            pixels[i][j] = new Pixel(i * pixSize, j * pixSize, pixSize, pixSize);
        }
    }
}

function draw(){
	for(let i = cantPixX-1; i >= 0; i--){
		for(let j = cantPixY-1; j>=0; j--){
			if(i==0 && j==0){
				pixels[i][j].r += variation*1*upR;
				pixels[i][j].g += variation*2*upG;
				pixels[i][j].b += variation*3*upB;
				if (pixels[i][j].r >= darkness){
					upR = -1;
					pixels[i][j].r = darkness-1;
				}
				else if(pixels[i][j].r <= brightness){
					upR = 1;
					pixels[i][j].r = brightness+1;
				}
				if (pixels[i][j].g >= darkness){
					upG = -1;
					pixels[i][j].g = darkness-1;
				}
				else if(pixels[i][j].g <= brightness){
					upG = 1;
					pixels[i][j].g = brightness+1;
				}
				if (pixels[i][j].b >= darkness){
					upB = -1;
					pixels[i][j].b = darkness-1;
				}
				else if(pixels[i][j].b <= brightness){
					upB = 1;
					pixels[i][j].b = brightness+1;
				}
			}
			else if(i==0){
				pixels[i][j].r = pixels[i][j-1].r;
				pixels[i][j].g = pixels[i][j-1].g;
				pixels[i][j].b = pixels[i][j-1].b;
			}
			else if(j==0){
				pixels[i][j].r = pixels[i-1][j].r;
				pixels[i][j].g = pixels[i-1][j].g;
				pixels[i][j].b = pixels[i-1][j].b;
			}
			else{
				pixels[i][j].r = pixels[i-1][j].r * 0.5 + pixels[i][j-1].r * 0.5;
				pixels[i][j].g = pixels[i-1][j].g * 0.5 + pixels[i][j-1].g * 0.5;
				pixels[i][j].b = pixels[i-1][j].b * 0.5 + pixels[i][j-1].b * 0.5;
			}
			pixels[i][j].show();
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