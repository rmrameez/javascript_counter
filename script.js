var i = 0;
var counter = document.getElementById('counter');

counter.innerHTML = 0;

function count(value){
	switch(value){
		case '+':
			i++;
			break;
		case '-':
			i--;
			break;
		default:
			i = 0;
			break;

	}
	counter.innerHTML = i;
}