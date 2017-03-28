 var withButtonClass = document.getElementsByClassName("button");
 console.log(withButtonClass);
 var NumberOfButtons = withButtonClass.length;
 console.log(NumberOfButtons);
for (k = 0; k < NumberOfButtons; k++) {
	alert (withButtonClass[k].innerText);
}

