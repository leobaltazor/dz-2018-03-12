function dz3(max) {
	//параметр max для максимального количества массива и максимального числа в массиве
	var ar = [];
	x = Math.random() * max;
	for (var i = 0; i < x; i++) {
		ar[i] = parseInt(Math.random() * max);
	}
	return ar;
}

console.log(dz3(10))