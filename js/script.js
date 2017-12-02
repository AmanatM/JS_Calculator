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
