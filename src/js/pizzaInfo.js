import { menu, handleRefreshClick } from './menu';
import '../scss/main.scss';

document.getElementById('refresh').onclick = e => {handleRefreshClick(e)};

const cookedPizza = JSON.parse(window.sessionStorage.getItem('cookedPizza'));

function getPizzaInfo(lastPizzas){
	if (!lastPizzas) {
		throw new Error("No pizza cooked!");
	}
	const counted = {};
	const usedIngridients = {};

  lastPizzas.forEach(pizza => {
    if (!counted[pizza]) {
      counted[pizza] = 1;
    } else {
      counted[pizza] += 1;
		}
  });

	Object.keys(counted).forEach(pizza => {
		Object.keys(menu[pizza]).forEach(ingridient => {
			if (!usedIngridients[ingridient]) {
				usedIngridients[ingridient] = menu[pizza][ingridient] * counted[pizza];
			} else {
				usedIngridients[ingridient] += menu[pizza][ingridient] * counted[pizza];
			}
		})
	});

  let popular = Object.keys(counted).sort((a, b) => counted[b] - counted[a]);
	return {
		popular: popular.slice(0, 5),
		ingridients: Object.keys(usedIngridients).sort((a, b) => usedIngridients[b] - usedIngridients[a])
	}
}

const result = getPizzaInfo(cookedPizza);

const popularPizza = document.createElement("ol");
popularPizza.classList.add("pizza-list");
popularPizza.innerHTML = "<span>Найпопулярніша піца:</span>";

result.popular.forEach(pizza => {
	const listItem = document.createElement("li");
	listItem.innerText = pizza;
	popularPizza.appendChild(listItem);
});

const ingies = document.createElement("ol");
ingies.innerHTML = "<span>Найпопулярніші інгредієнти:</span>";
ingies.classList.add("ingridients-list");
result.ingridients.forEach(ing => {
	const listItem = document.createElement("li");
	listItem.innerText = ing;
	ingies.appendChild(listItem);
});

const content = document.getElementById('content');

content.appendChild(popularPizza);
content.appendChild(ingies);