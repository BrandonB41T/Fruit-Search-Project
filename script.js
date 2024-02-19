const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


const isInList = (arr, inputVal) =>
arr.some
(
	(val) => val.toLowerCase().includes(inputVal.toLowerCase())
);

function searchHandler(e) {
	if (input.value === ''  ||
	input.value.length === 1  ||
	fruit.includes(input.value)  ||
	!isInList(fruit, input.value)
	) {
		suggestions.innerHTML = '';
		return;
	};

	if (e  &&  input.value.length > 1) {
		showSuggestions(suggestions, input.value)
	}
}






function showSuggestions(results, inputVal) {
	results.innerHTML = '';
	results.style.display = 'inline-block';     //maybe this caused problems with display flex
	const currSuggestions = search(inputVal);
	for (let item of currSuggestions) {
		const li = createLi(item);
		results.appendChild(li);
	}
}

function search(str) {
	const string = str.toLowerCase();
	const results = fruit.filter((val) => val.toLowerCase().includes(string))

	return results;
}

const createLi = (str) => {
	const li = document.createElement('li');
	li.innerText = str;
	return li;
}









function useSuggestion(e) {
	const target = e.target;
	if (target.tagName === "LI") {
		input.value = target.innerText;
		suggestions.innerHTML = '';
	}
	if (fruit.includes(input.value)) {
		suggestions.style.display = 'none';    //maybe this caused problems with display flex
		suggestions.innerHTML = '';
		return;
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);