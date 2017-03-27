function rysujChoinke(n) {
	for ( var k = 1 ; k < n; k++) {
		var star = '*';
			for ( var j = 1 ; j < k*2-1; j++) {
				star  += '*';
			}
			console.log(star);
	}
	
} 
rysujChoinke(6);