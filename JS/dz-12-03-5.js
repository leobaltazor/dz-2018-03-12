function count(ar, a) {
	var count = 0;
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === a) {
			count++
		}
	}
	return count
}
var arr = [1,2,3,1,3,4,5,1];
var x = 1;
console.log(count(arr,x));
