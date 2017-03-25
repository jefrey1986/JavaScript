var a = prompt('Wpisz wartość liczby a');
var h = prompt('Wpisz wartość liczby h');

function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <= 0) ) {
		console.log("Nieprawidłowe dane");
	} else ( (a > 0) && (h > 0) ) {
		var result = a*h/2
		return result
		console.log( getTriangleArea(10,6) )
	}
}
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 10);
var triangle3Area = getTriangleArea(12, 22);