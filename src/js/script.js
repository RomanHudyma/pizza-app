import { menu, handleRefreshClick } from './menu';
import '../scss/main.scss';

document.getElementById('refresh').onclick = e => {handleRefreshClick(e)};

function preparePizzaClickHandler(pizzaName) {
	let cookedPizza = JSON.parse(window.sessionStorage.getItem('cookedPizza'));
	if(!cookedPizza) {
		cookedPizza = [];
	}
	cookedPizza.push(pizzaName);
	window.sessionStorage.setItem('cookedPizza', JSON.stringify(cookedPizza));
}

for (let [key, value] of Object.entries(menu)) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("pizza-item");

	const title = document.createElement("h3");
	title.classList.add("pizza-title");
	title.innerText = key;
	
	const button = document.createElement("button"); 
	button.classList.add("pizza-add");
	button.innerText = "Готувати";
	button.type = "button";
	button.onclick = function() {
		preparePizzaClickHandler(key);
	};


	wrapper.appendChild(title);
	wrapper.appendChild(button);
	document.getElementById('content').appendChild(wrapper);
};