function dz3(max) {
	//параметр max для максимального количества массива и максимального числа в массиве
	var ar = [];
	x = Math.random() * max;
	for (var i = 0; i < x; i++) {
		ar[i] = parseInt(Math.random() * max);
	}
	return ar;
}


arr = dz3(10) //параметр массива задаем тут
console.log(arr);


//Сумма
function summ(ar) {
	var sum = 0;
	for (var i = 0; i < ar.length; i++) {
		sum += ar[i];
	}
	return sum
}
console.log(`Сумма ${summ(arr)}`);

// ####################################
//Среднее
function midd(ar) {
	mid = summ(ar) / ar.length
	return mid
}
console.log(`Среднее ${midd(arr)}`)

// ####################################
// Разность
function razn(ar) {
	razn = 0
	for (var i = 0; i < ar.length; i++) {
		razn -= ar[i]
	}
	return razn
}
console.log(`Разность ${razn(arr)}`)

// ####################################
//Количество четных / нечетных элементов
function chet_neChet(ar) {
	var chet = 0;
	var nchet = 0;
	for (var i = 0; i < ar.length; i++) {
		if (ar[i] % 2 == 0) {chet++}
		else {nchet++}
	}
	// return [chet, nchet]
	console.log(`Количество четных элементов= ${chet}, 
Количество не четных элементов= ${nchet}`)
}

chet_neChet(arr)

// ####################################
//MIN MAX
function min_max(ar) {
	var max=ar[1], min=ar[1];
	for (var i = 0; i < ar.length; i++) {
	if (ar[i] > max) {max = ar[i]}
	if (ar[i] < min) {min = ar[i]}
}
console.log(`min= ${min}, 
max= ${max}`);
}
min_max(arr)

// ####################################
//Количество положительных и отрицательных элементов
function Kpol_Kotr(ar) {
	var pol = 0, otr = 0, zer=0;
	for (var i = 0; i < ar.length; i++) {
	if (ar[i] < 0) {otr++}
	else if (ar[i] == 0) {zer++}
	else {pol++}
}
console.log(`Количество положительных= ${pol}, 
Количество отрицательных= ${otr},
Количество 0= ${zer}`);
}
Kpol_Kotr(arr)