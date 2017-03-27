 // plik scripts.js

var a = prompt('Wpisz wartość liczby a');
var	b = prompt('Wpisz wartość liczby b');
var value = ((a * a) + (2 * a * b) - (b * b));
console.log("Wartość dodawania liczby a=" + a + " podniesionej do kwadratu i liczbt b=" + b + " podniesionej do kwadratu wynosi: " + value);
if (value > 0) {
	console.log("Wartość dodatnia");
} else if (value < 0) {
	console.log("Wartość ujemna");
} else {
	console.log("0");
}