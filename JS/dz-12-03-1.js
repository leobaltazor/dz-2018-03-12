function dz1(a,b) {
	var rez;
	if (isNaN(a) && isNaN(b)) {
		rez = "Вы ввели оба символа, введите число и символ"
	} else if (isNaN(a) == false && isNaN(b) == false) {
		rez = "Вы ввели оба числа, введите число и символ"
	} else if (isNaN(a)) {
		rez = a;
		if (b>0) {
			for (var i = 1; i < b; i++) {
				rez += a;
			}
		} else {
			rez ="Введите число > 0"
		}
	} else if (isNaN(b)) {
		rez = b;
		if (a>0) {
			for (var i = 1; i < a; i++) {
				rez += b;	
			}
		} else {
			rez ="Введите число > 0"
		}
	}
	return rez;
}

console.log(dz1(1,1));
console.log(dz1("a","b"));
console.log(dz1("a",0));
console.log(dz1("a",1));
console.log(dz1("a",2));
console.log(dz1(0,"b"));
console.log(dz1(1,"b"));
console.log(dz1(2,"b"));
