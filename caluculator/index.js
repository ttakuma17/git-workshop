// 演算子を変換する
function calculator(op1, op2, operatorChar) {
	op1 = parseInt(op1);
	op2 = parseInt(op2);
	if (operatorChar == "+") return op1 + op2;
	else if (operatorChar == "-") return op1 - op2;
	else if (operatorChar == "*") return op1 * op2;
	else if (operatorChar == "/" && op2 == 0) return op1;
	else return op1 / op2;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");

const answer = document.getElementById("answer");

document.getElementById("plusOperator").addEventListener("click", function () {
	answer.value = calculator(op1.value, op2.value, "+");
});

document.getElementById("minusOperator").addEventListener("click", function () {
	answer.value = calculator(op1.value, op2.value, "-");
});

document.getElementById("timesOperator").addEventListener("click", function () {
	answer.value = calculator(op1.value, op2.value, "*");
});

document.getElementById("divideOperator").addEventListener("click", function () {
	answer.value = calculator(op1.value, op2.value, "/");
});
