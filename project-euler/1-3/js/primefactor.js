var userInput = 20;
var answer = userInput;
var i = 2;
while(i<answer) {
	while(answer%i === 0) {
		(function(tempAnswer) {
			document.write(answer + " can be divided by " + i + " which gives us " + tempAnswer + "<br><br>");

			answer = tempAnswer;
		})(answer / i)
	}
	i++;
}
document.write(answer + " is the biggest prime factor for " + userInput + ".");
