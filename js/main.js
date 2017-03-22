function fibonacci() {
	var a = 0;
	var b = 1;

	var total;

	var input = document.querySelector('.sequence').value;
	
 // for (var i = 0; i < input; i++){

 while(input > 1) {
		total = b;
		b = b + a;
		a = total;
		input--;
	console.log(a);
	} 	
 document.querySelector('.sequenceOutput').textContent = total;

}
