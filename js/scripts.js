 var withButtonClass = document.getElementsByClassName("button");
 console.log(withButtonClass);
 var btn = withButtonClass.length;
 console.log(btn);
for (k = 0; k < btn; k++) {
	alert (withButtonClass[k].innerText);
}

