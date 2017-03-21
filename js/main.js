function fibonacci() {

  var number = document.querySelector('.sequence').value;

var fibArray = [0, 1];

for (var i = 2; i <= number; i++) {

var addFib = fibArray[i-2] + fibArray[i-1];
 fibArray.push(addFib);
 var fibArrayAsString = fibArray.join(', ');

}

document.querySelector('.sequenceOutput').textContent = fibArrayAsString;

}