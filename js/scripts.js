var list = document.getElementById("list");
var add = document.getElementById('addElem');
var newPoint = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	var number = newPoint.length;
	list.innerHTML += "<li>item " + number + "</li>";
	console.log();
});

