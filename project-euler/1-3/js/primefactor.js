function findMaxPrimeNumber() {
	userInput = document.getElementById("input3").value;
	answer = userInput;
	var i = 2;
	while(i<answer) {
		while(answer%i === 0) {
			(function(tempAnswer) {
				answer = tempAnswer;
			})(answer / i)
		}
		i++;
	}
	document.getElementById("output3").innerHTML = answer;
}
