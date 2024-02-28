const G = 0.00000000006672;
const PI = Math.PI;

class Planet{
	constructor(ro, thetaDegrees, omegaDegrees, mass, density){
		this.ro = ro; // distance from planet orbited arround (x if stationary)
		this.theta = this.degreesToRadians(thetaDegrees); // angle from the planet orbited arround (y if stationary)
		this.mass = mass;
		this.density = density;
		this.radius;
		this.omega = this.degreesToRadians(omegaDegrees); // angular velocity
		this.alpha = 0; // angular acceleration
		this.planetsOrbitingAround = []; // the planets orbiting around this one

		this.radius = this.radiusFromMass(mass, density);
	}

	degreesToRadians(degrees){
		return (degrees * PI) / 180;
	}

	radiansToDegrees(radians){
		return (radians * 180) / PI;
	}

	// calculates the distance between 2 planets
	distanceCartesian(x1, y1, x2, y2){
		let distanceX = Math.abs(x1 - x2);
		let distanceY = Math.abs(y1 - y2);
		let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
		return distance;
	}

	// returns true if the planets crashed, false otherwise
	planetCrash(radius1, radius2, ro){
		if(radius1 + radius2 <= ro){
			return true;
		}
		return false;
	}

	// returns an array, array[0] having ro, and array[1] having theta
	cartesianToPolarCoords(x1, y1, x2, y2){
		let polar = [];
		polar[0] = this.distanceCartesian(x1, y1, x2, y2);
		polar[1] = Math.asin(Math.abs(y1 - y2) / polar[0]);
		return polar;
	}

	radiusFromMass(mass, density){
		let num = 3*mass;
		let den = 4*PI*density;
		let div = num/den;
		let exp = 1/3;
		return Math.pow(div, exp);
	}

	addMoon(planet){
		this.planetsOrbitingAround.push(planet);
	}

	show(currentX, currentY){
		fill(255);		
		ellipse(currentX, currentY, this.radius);
		for(let i = 0; i < this.planetsOrbitingAround.length; i++){
			let nextRo = this.planetsOrbitingAround[i].ro, nextTheta = this.planetsOrbitingAround[i].theta
			this.planetsOrbitingAround[i].show(currentX + nextRo * Math.cos(nextTheta), currentY + nextRo * Math.sin(nextTheta))
		}
	}

	update(){
		this.theta += this.omega;
		for(let i = 0; i < this.planetsOrbitingAround.length; i++){
			this.planetsOrbitingAround[i].update();
		}
	}
}