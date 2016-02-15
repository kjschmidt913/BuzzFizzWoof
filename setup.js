var fizzBuzz = function(n) {
	var space = "";

		if (isMultipleOfThree(n) && isMultipleOfFive(n) && isMultipleOfSeven(n))
			return space += "fizzbuzzwoof";
		else if (isMultipleOfThree(n) && isMultipleOfSeven(n))
			return space += "fizzwoof";
		else if (isMultipleOfFive(n) && isMultipleOfSeven(n))
			return space += "buzzwoof";
		else if (isMultipleOfThree(n) && isMultipleOfFive(n))
			return space += "fizzbuzz";
		else if (isMultipleOfThree(n))
			return space += "fizz";
		else if (isMultipleOfFive(n))
			return space += "buzz";
		else if (isMultipleOfSeven(n))
			return space += "woof";
		else 
			return n;

	};

	var isMultipleOfThree = function (n) {
		var number = n.toString();
		return number.indexOf("3") !==-1 || n % 3 === 0;
	};
	var isMultipleOfFive = function (n) {
		var number = n.toString();
		return number.indexOf("5") !==-1 || n % 5 === 0;
	};
	var isMultipleOfSeven = function (n) {
		var number = n.toString();
		return number.indexOf("7") !==-1 || n % 7 === 0;
	};


for (var n=1; n<=100; n++) {
	console.log(fizzBuzz(n));
}
	





