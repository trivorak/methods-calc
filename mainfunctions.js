// original formula (excel) =roundup((input+0.25)/0.125,0)*0.125
function roundByResolution (input,resolution){
  return Math.ceil(input/resolution)*resolution;
}

// original formula (excel) =roundup((((input+0.25)*Qty+3)/0.25))*0.25
function barOpCalculator(partLen,partQty,bufferLen,chuckingStockLen){
  return roundByResolution((((partLen+bufferLen)*partQty)+chuckingStockLen),0.125);
}

function rawRoughRoundup(input,bufferLen){
  return roundByResolution(input+bufferLen,0.125);
}

// Simple conversion from Diameter to Radius for Larger formula
function diaToRad(diameter){
  return diameter/2;
}

function radSquared(radius){
  return Math.pow(radius,2);
}

function diaSquared(diameter){
  return radSquared(diaToRad(diameter));
}

//main function for cylinder volume 
//original formula = pi * (radius of OD squared - radius of ID squared) * height
// output is in inch cube
function cylinderVolume(outD,insD,height){
  return Math.PI * (diaSquared(outD)-diaSquared(insD))*height;
}

function weightByVolume(outD,insD,height,density){
  return cylinderVolume(outD,insD,height)*density;
}

function furnaceWeightToLabor(pPerLB,weight,burdenRate){
	return (pPerLB*weight)/burdenRate;
}
