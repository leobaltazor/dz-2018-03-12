function kvadrat(a,b,c) {
	var d = b * b - 4 * a * c;
	if (d > 0) {
		x1 = (-b + Math.pow(d, 0.5)) / (2 * a)
		x2 = (-b - Math.pow(d, 0.5)) / (2 * a)
		return [x1,x2]
	} else if (d == 0) {
		x = -b / (2 * a);
		return x;
	} else if (d < 0) {
		return false
	}
}

console.log(`Квадратный корень ${kvadrat(1,-26,120)}`);
console.log(`Квадратный корень ${kvadrat(1,-6,9)}`);
console.log(`Квадратный корень ${kvadrat(5,3,7)}`);