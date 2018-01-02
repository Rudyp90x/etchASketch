
function createDivs(){
	for(var i = 0; i < 16; i++){
		const container = document.querySelector('.container');
		const row = document.createElement('div');
		row.classList.add('row');
			for(var j = 0; j < 16; j++){
				const col = document.createElement('div');
				col.classList.add('col-1');
				row.appendChild(col);
			};
		container.appendChild(row);
					const divs = document.querySelectorAll('.col-1');
					divs.forEach((div) => {
						div.addEventListener('mouseenter', (e) => {
							e.target.style.background = 'blue';
						});
					});
	};
};

window.onload = createDivs;