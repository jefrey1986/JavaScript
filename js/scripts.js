 // plik scripts.js

var a = 15,
	b = 7,
	value = (a * a) + (2 * a * b) - (b * b);
console.log('Wasrtość dodawania liczby a podniesionej do kwadratu' + a + ' i liczbt b podniesionej do kwadratu: ' + b + ' wynosi: ' + value);
if ( value >= 0) {
	console.log("Wartość dodatnia");
} if ( value < 0) {
    console.log("Wartość ujemna");
}