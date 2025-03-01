import Utilities from "./Utilities.js";
import DomPercentageBar from "./DomPercentageBar.js";
import {createIcon, SkullSvg} from "./icons.js";

const container = document.getElementById('js-app');
const currencyGrid = Utilities.buildElement('ul', 'o-currencygrid');

function DomAddCurrency(arr){

	container.append(currencyGrid);

	for(const currencyItem in arr){
		const itemObj = arr[currencyItem];

		// Set some variables
		const name = itemObj.displayName;
		const percentage = itemObj.displayPercentage;

		// Create the parent item
		const item = Utilities.buildElement('li', 'c-currencyitem');
		// Add some classes
		itemObj.smallUnitKilled && item.classList.add('c-currencyitem--smallUnitKilled')
		itemObj.mainUnitKilled && item.classList.add('c-currencyitem--mainUnitKilled')
		
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

		// Add icons
		const statusContainer = Utilities.buildElement('div', 'c-currencyitem__status-container');
		item.append(statusContainer);
		if (itemObj.smallUnitKilled){
			statusContainer.append(createIcon(SkullSvg));
		}
		if (itemObj.mainUnitKilled){
			statusContainer.append(createIcon(SkullSvg));
		}
	}
}

export default DomAddCurrency;