const urlEncode = function(text){
	// Put your solution here
	text = text.trim();
	let array = text.split("")
	for (let i = 0; i < array.length; i++){
		if (array[i] === " "){
			array[i] = "%20";
		}
	}
	return array.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
