import Utilities from "./Utilities.js";
import {currencyGrid} from "./Variables.js";

// Adds currency to the DOM

function DomAddCurrency(obj){
	const unitName = obj.unitName;
	const unitPrice = obj.unitPrice;
	const unitPercentage = obj.unitPercentage;
	const smallUnitName = obj.smallUnitName;
	const smallUnitPrice = obj.smallUnitPrice;
	const smallUnitPercentage = obj.smallUnitPercentage;
	const smallestUnitKilled = obj.smallestUnitKilled;

	let itemTextString = unitPercentage < 1 ? `${unitName} <1%` : `${unitName} ${unitPercentage}%`;
	let itemTextStringSmall = `${smallUnitName} ${smallUnitPercentage}%`;

	const item = Utilities.buildElement('li', 'c-currencyitem');

	const itemMain = Utilities.buildElement('div', 'c-currencyitem__main');
	const itemMainText = Utilities.buildElement('span', 'c-currencyitem__main__text');
	itemMain.append(itemMainText);
	itemMainText.innerText = itemTextStringSmall;
	item.append(itemMain);

	if (smallestUnitKilled){
		const itemSecondary = Utilities.buildElement('div','c-currencyitem__secondary');
		const itemSecondaryText = Utilities.buildElement('span', 'c-currencyitem__secondary__text');
		itemSecondary.append(itemSecondaryText);
		itemSecondaryText.innerText = itemTextString;
		item.append(itemSecondary);
	}

	
	

	


	currencyGrid.append(item);
}

export default DomAddCurrency;