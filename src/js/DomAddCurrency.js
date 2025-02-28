import Utilities from "./Utilities.js";
import {container, currencyGrid} from "./Variables.js";
import DomPercentageBar from "./DomPercentageBar.js";

// Adds currency to the DOM

function DomAddCurrency(arr){

	container.append(currencyGrid);

	for(const currencyItem in arr){
		const itemObj = arr[currencyItem];

		// Set some variables
		const name = itemObj.displayName;
		const percentage = itemObj.displayPercentage;

		// Create the parent item
		const item = Utilities.buildElement('li', 'c-currencyitem');
		itemObj.killed && item.classList.add('c-currencyitem--killed')
		
		// Add percentage bar
		const itemPercentageBar = DomPercentageBar(itemObj.displayPercentage);
		item.append(itemPercentageBar);

		// Add main text
		const itemTextString = percentage < 1 ? `${name} <1%` : `${name} ${percentage}%`;
		const itemMainText = Utilities.buildElement('span', 'c-currencyitem__text');
		itemMainText.innerText = itemTextString;
		item.append(itemMainText);

		// Add the parent item to the grid
		currencyGrid.append(item);
	}
}

export default DomAddCurrency;