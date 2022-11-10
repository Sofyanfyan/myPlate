function calculateBMI () {
    const weight = 55 // dom weight.value (document.getElementById("weight") sesuain sm id'.value;)
    const height = 165 // dom height.value (document.getElementById("height") sesuain sm id'.value;)
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
  
    if (bmi <= 18.4) {
		result = `Underweight: ${bmi}`
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		result = `Normal: ${bmi}`
	} else if (bmi >= 25 && bmi <= 29.9) {
		result = `Overweight: ${bmi}`
	} else if (bmi >= 30) {
		result = `Obses: ${bmi}`
	};

    if (weight === 0 ) {
		// document.getElementById("results")'sesuain sm id'.innerHTML = 'Enter some value';
	} else if (height === 0){
		// document.getElementById("results") sesuain sm id'.innerHTML = 'Enter some value';
	} else {
		// document.getElementById("results") sesuain sm id'.innerHTML = result;
	}
	if (weight < 0) {
		// document.getElementById("results")'sesuain sm id'.innerHTML = "Negative Values not Allowed";
	};
    // return result
}
console.log(calculateBMI());