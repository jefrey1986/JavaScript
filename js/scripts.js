var list = document.getElementById("list");
var add = document.getElementById('addElem');
var itemList = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	var number = itemList.length;
	list.innerHTML += "<li>item " + number + "</li>";
	console.log();
});

