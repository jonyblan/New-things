let sun;
let earth;
let moon;

function setup(){
	createCanvas(800, 600);
	sun = new Planet(0, 0, 0, 5000000, 1);
	earth = new Planet(200, 0, -1, 500000, 1);
	moon = new Planet(50, 0, 5, 50000, 1);
	sun.addMoon(earth);
	earth.addMoon(moon);
}

function draw(){
	background(0);
	translate(width/2, height/2);
	sun.show(0, 0);
	sun.update();
}