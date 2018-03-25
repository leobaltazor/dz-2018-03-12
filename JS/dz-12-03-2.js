function dz2(a,min,max) {
	var ar  = [],
		j   = 0,
		rez = [];
	ar[0] = min;
	for (var i = 1; i <= (max-min); i++) {
		ar[i] = ar[i-1]+1;
	}
	for (var i = 0; i < ar.length; i++) {
		if (a % ar[i] == 0) {
			rez[j] = ar[i];
			j++;
		}
	}
	return rez;
}

//Входные переменный
var a = 18,
	b = -6,
	c = 18;

//Результат
console.log(`Наши значения ${a}, ${b}, ${c}`);
console.log(dz2(a,b,c));