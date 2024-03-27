let sun;
let earth;
let moon;
let planets = [];

function setup(){
	createCanvas(1366, 771);
	sun = new Planet(0, 0, 0, 5000000, 1);
	earth = new Planet(200, 0, -1, 500000, 1);
	moon = new Planet(50, 0, 5, 50000, 1);
	for(let i = 0; i < 500; i++){
		planets[i] = new Planet(random(100, 700), 0, random(-10, 10), random(10000, 1000000), 1);
		sun.addMoon(planets[i]);
	}
	sun.addMoon(earth);
	earth.addMoon(moon);
}

function draw(){
	background(0);
	translate(width/2, height/2);
	sun.show(0, 0);
	sun.update();
}