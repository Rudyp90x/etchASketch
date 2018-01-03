function gridNumber(){
	const number = prompt('Enter a number.');
	return number;
};

function divide(a,b){
	const number = a / b;
	return number.toFixed(2) + '%';
};

function multiply(a,b){
	const number = a * b;
	return number;
};

function defaultPage(){
	for(var i = 0; i < 256; i++){
		const container = document.querySelector('.container');
		const div = document.createElement('div');
		div.classList.add('col-1');
		container.appendChild(div);
					const divs = document.querySelectorAll('.col-1');
					divs.forEach((div) => {
						div.addEventListener('mouseenter', (e) => {
							e.target.style.background = '#E9D460';
						});
					});

	};
};

function createGrid(){
	const userNumber = gridNumber();
	const newWidth = divide(93, userNumber);
	const divAmount = multiply(userNumber, userNumber);
	
	for(var i = 0; i < divAmount; i++){
		const container = document.querySelector('.container');
		const div = document.createElement('div');
		div.classList.add('col-1');
		container.appendChild(div);
		const grids = document.querySelectorAll('.col-1');
					grids.forEach((div) => {
						div.style.width = newWidth;
					});
					const divs = document.querySelectorAll('.col-1');
					divs.forEach((div) => {
						div.addEventListener('mouseenter', (e) => {
							e.target.style.background = '#E9D460';
						});
					});
	};

};

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
		const container = document.querySelector('.container');
		const divs = document.querySelectorAll('.col-1');
			divs.forEach((div) => {
				const col = document.querySelector('.col-1');
				container.removeChild(col);
			});
		createGrid();
		//defaultPage();
});

window.onload = defaultPage;