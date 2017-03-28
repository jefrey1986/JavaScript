 var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
 var animal = "Zielone słonie";
 var animalUpperCased = animal.toUpperCase();
 var FirstWordOfText = text.split(' ', 1);
 var textAfter = text.replace(FirstWordOfText, animalUpperCased);
 var textEnd = textAfter.slice(0, textAfter.length/2);
 console.log(textEnd);