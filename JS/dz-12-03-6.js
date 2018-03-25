function isnan(params) {
	if (params - params === 0) {
		return false
	} else {
		return true
	}
}

console.log(isnan("s"));
console.log(isnan(2));
console.log(isnan("2"));
console.log("***********Проверка*************");
console.log(isNaN("s"));
console.log(isNaN(2));
console.log(isNaN("2"));