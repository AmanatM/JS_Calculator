var display = document.querySelector('.disp-input'),
	 	operators = document.querySelectorAll('.operator');
	 	numbers = document.querySelectorAll('.num'),
	 	clearBtn = document.querySelector('#ac'),
	 	equalBtn = document.querySelector('#equal'),
	 	del = document.querySelector('#del'),
	 	mem= '',
	 	currOp = '';

for(var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function(e) {
		mem = display.value;
		display.value = '0';
		currOp = e.srcElement.id;
	});
};

for(var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(e) {
		display.value == '0' ? display.value = e.srcElement.textContent : display.value += e.srcElement.textContent;
	});
}

equal.addEventListener('click', function() {
	switch(currOp) {
		case 'plus': display.value = +(mem) + +(display.value);
		break;
		case 'minus': display.value = +(mem) - +(display.value);
		break;
		case 'multiply': display.value = +(mem) * +(display.value);
		break;		case 'devide': display.value = +(mem) / +(display.value);
		break;
		case 'module': display.value = +(mem) % +(display.value);
	}
});

clearBtn.addEventListener('click', function() {
	display.value = '0';
	mem = '';
	currOp = '';
});

del.addEventListener('click', function() {
	if (display.value != 0) {
		var temp = display.value.split('');
		temp.length -= 1;
		display.value = temp.toString().replace(new RegExp(',', 'g'), '');
		display.value <= 0 ? display.value = 0 : false;

	}
});

// theme changer
var counter = 0;

var myBtn = document.getElementById('change-color-btn').addEventListener('click', function() {
		if(counter == 0) {
			document.body.style.background = '#6b46f7';
			display.style.background = '#6241df';
			for(var i = 0; i <= numbers.length - 1; i++)
				numbers[i].style.color = '#6b46f7';
			for(var i = 0; i <= operators.length - 1; i++) {
				operators[i].style.background = '#b2a0f8';
				equal.style.background = '#b2a0f8';
				del.style.background = '#b2a0f8';
			}
			this.style.background = '#f65035';		
			counter = 1;
		}
		else {
			document.body.style.background = '';
			display.style.background = '';
			for(var i = 0; i <= numbers.length - 1; i++)
				numbers[i].style.color = '';
			for(var i = 0; i <= operators.length - 1; i++) {
				operators[i].style.background = '';
				equal.style.background = '';
				del.style.background = '';
			}
			this.style.background = '';	
			counter = 0;
		}
});