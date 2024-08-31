import Utilities from "./Utilities.js";
import {currencyGrid} from "./Variables.js";

// Adds currency to the DOM

function DomAddCurrency(unitName, smallUnitName, unitPercentage, smallestUnitPercentage, smallestUnitKilled){
	const item = Utilities.buildElement('li', 'c-currencyitem');
	const itemMain = Utilities.buildElement('div', 'c-currencyitem__main');
	const itemText = Utilities.buildElement('span', 'c-currencyitem__text');
	let itemTextString;
	let itemTextStringsmall;
	itemMain.append(itemText);
	const percentageBar = (percentage) => {
		const width = percentage > 100 ? 100 : percentage;
		const element = Utilities.buildElement('span', 'c-currencyitem__percentage-bar');
		element.style.width = width + '%';
		return element;
	};
	if (smallestUnitKilled){
		item.classList.add('c-currencyitem--complete');
		// main title
		itemTextString = `${unitName} ${unitPercentage}%`;
		itemTextStringsmall = `${smallUnitName} ${smallestUnitPercentage}%`;
		itemText.innerText = itemTextStringsmall;
		function changePriceValue(newValue){
			itemText.innerText = newValue;
		}
		item.setAttribute('tabindex', 0);
		item.addEventListener('mouseenter',() => {
			changePriceValue(itemTextString);
		});
		item.addEventListener('mouseleave',() => {
			changePriceValue(itemTextStringsmall);
		});
		item.addEventListener('focus', () => {
			changePriceValue(itemTextString);
		});
		item.addEventListener('blur', () => {
			changePriceValue(itemTextStringsmall);
		})
		item.append(itemMain);
		itemMain.append(percentageBar(smallestUnitPercentage));
	} else {
		// main title
		itemTextString = smallUnitName < 1 ? `${smallestUnitPercentage} <1%` : `${smallUnitName} ${smallestUnitPercentage}%`;
		itemText.innerText = itemTextString;
		item.append(itemMain);
		itemMain.append(percentageBar(smallestUnitPercentage));
	}

	currencyGrid.append(item);
}

export default DomAddCurrency;