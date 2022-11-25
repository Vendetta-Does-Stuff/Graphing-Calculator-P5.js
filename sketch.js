graphScl = 40; // Set the scale of the graph; 40 is standard; does not support values greater than 1000

let origin = [0, 0]; // relative coordinates of the origin

let xI = .25; // Initially optimal resolution for a graph scale of 1

let res = 3; // the resolution of the graph; 4 is standard for static graphs; 1 is standard for animated graphs

for (i = 0; i < res; i++) {
	xI /= 4;
}

let graphSize;

if (window.innerHeight < window.innerWidth) {
	graphSize = window.innerHeight - 20;
} else {
	graphSize = window.innerWidth - 20;
}

function setup() {
	createCanvas(graphSize, graphSize);
	background(0);
	strokeWeight(1 / graphScl);
	rectMode(CENTER);
	noFill();
}

let xStandard = 0 - graphSize / 2;

// variables

let x = xStandard;
let y;
let y1;
let y2;

// initialize the position of your animation variables here

let a = 1;
let b = 1;
let c = 1;

// speed at which the graph animates

let masterVel = 0.001; // initialize velocity for all animation variables;

let aI = masterVel;
let bI = masterVel;
let cI = masterVel;

// functions

let sinx;
let cosx;
let tanx;
let asinx;
let acosx;
let atanx;
let sina;
let cosa;
let tana;
let asina;
let acosa;
let atana;
let sinax;
let cosax;
let tanbax;
let asinax;
let acosax;
let atanax;
let sinb;
let cosb;
let tanb;
let asinb;
let acosb;
let atanb;
let sinbx;
let cosbx;
let tanbx;
let asinbx;
let acosbx;
let atanbx;
let sinab;
let cosab;
let tanab;
let asinab;
let acosab;
let atanab;
let sinabx;
let cosabx;
let tanabx;
let asinabx;
let acosabx;
let atanabx;
let sinc;
let cosc;
let tanc;
let asinc;
let acosc;
let atanc;
let sincx;
let coscx;
let tancx;
let asincx;
let acoscx;
let atancx;
let sinac;
let cosac;
let tanac;
let asinac;
let acosac;
let atanac;
let sinacx;
let cosacx;
let tanacx;
let asinacx;
let acosacx;
let atanacx;
let sinbc;
let cosbc;
let tanbc;
let asinbc;
let acosbc;
let atanbc;
let sinbcx;
let cosbcx;
let tanbcx;
let asinbcx;
let acosbcx;
let atanbcx;
let sinabc;
let cosabc;
let tanabc;
let asinabc;
let acosabc;
let atanabc;
let sinabcx;
let cosabcx;
let tanabcx;
let asinabcx;
let acosabcx;
let atanabcx;

// products

let xx;
let aa;
let bb;
let cc;
let ax;
let bx;
let cx;
let abx;
let acx;
let bcx;
let ab;
let ac;
let bc;

function equation() {
	xx = x * x;
	sinx = math.sin(x);
	cosx = math.cos(x);
	tanx = math.tan(x);
	asinx = math.asin(x);
	acosx = math.acos(x);
	atanx = math.atan(x);

	if (a !== undefined) {
		aa = a * a;
		sina = math.sin(a);
		cosa = math.cos(a);
		tana = math.tan(a);
		asina = math.asin(a);
		acosa = math.acos(a);
		atana = math.atan(a);
		ax = a * x;
		sinax = math.sin(ax);
		cosax = math.cos(ax);
		tanax = math.tan(ax);
		asinax = math.asin(ax);
		acosax = math.acos(ax);
		atanax = math.atan(ax);
	} else if (b !== undefined) {
		bb = b * b;
		sinb = math.sin(b);
		cosb = math.cos(b);
		tanb = math.tan(b);
		asinb = math.asin(b);
		acosb = math.acos(b);
		atanb = math.atan(b);
		bx = b * x;
		abx = a * b * x;
		bxx = b * x * x;
		abxx = a * b * x * x;
		ab = a * b;
		sinbx = math.sin(bx);
		cosbx = math.cos(bx);
		tanbx = math.tan(bx);
		asinbx = math.asin(bx);
		acosbx = math.acos(bx);
		atanbx = math.atan(bx);
		sinab = math.sin(ab);
		cosab = math.cos(ab);
		tanab = math.tan(ab);
		asinab = math.asin(ab);
		acosab = math.acos(ab);
		atanab = math.atan(ab);
	} else if (c !== undefined) {
		cc = c * c;
		sinc = math.sin(a);
		cosc = math.cos(a);
		tanc = math.tan(a);
		asinc = math.asin(a);
		acosc = math.acos(a);
		atanc = math.atan(a);
		cx = c * x;
		acx = a * c * x;
		bcx = b * c * x;
		ac = a * c;
		bc = b * c;
		sincx = math.sin(cx);
		coscx = math.cos(cx);
		tancx = math.tan(cx);
		asincx = math.asin(cx);
		acoscx = math.acos(cx);
		atancx = math.atan(cx);
		sinacx = math.sin(acx);
		cosacx = math.cos(acx);
		tanacx = math.tan(acx);
		asinacx = math.asin(acx);
		acosacx = math.acos(acx);
		atanacx = math.atan(acx);
		sinbcx = math.sin(bcx);
		cosbcx = math.cos(bcx);
		tanbcx = math.tan(bcx);
		asinbcx = math.asin(bcx);
		acosbcx = math.acos(bcx);
		atanbcx = math.atan(bcx);
		sinabcx = math.sin(abcx);
		cosabcx = math.cos(abcx);
		tanabcx = math.tan(abcx);
		asinabcx = math.asin(abcx);
		acosabcx = math.acos(abcx);
		atanabcx = math.atan(abcx);
		sinac = math.sin(ac);
		cosac = math.cos(ac);
		tanac = math.tan(ac);
		asinac = math.asin(ac);
		acosac = math.acos(ac);
		atanac = math.atan(ac);
		sinbc = math.sin(bc);
		cosbc = math.cos(bc);
		tanbc = math.tan(bc);
		asinbc = math.asin(bc);
		acosbc = math.acos(bc);
		atanbc = math.atan(bc);
		sinabc = math.sin(abc);
		cosabc = math.cos(abc);
		tanabc = math.tan(abc);
		asinabc = math.asin(abc);
		acosabc = math.acos(abc);
		atanabc = math.atan(abc);
	}

	// type your equation down here
	y = math.sin(100 * x) + sinx;
}

function draw() {
	background(0);
	translate((width / 2) + (origin[0] * graphScl), (height / 2) - (origin[1] * graphScl));
	scale(graphScl, -graphScl);
	stroke(63);
    x = xStandard;
	if (x === xStandard || x === 0) {
		line(0, height / 2, 0, -height / 2);
		line(-width / 2, 0, width / 2, 0);
	}
	beginShape();
	while (x !== width) {
		stroke(255);
		vertex(x, y);
		x += xI;
		equation();
	}
	endShape();
	a += aI;
	b += bI;
	c += cI;
}
