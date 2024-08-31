import DataModify from './DataModify.js';
import DataSort from './DataSort.js';
import DomAddCurrency from './DomAddCurrency.js';
import {container, currencyGrid} from "./Variables.js";

// Data
const tickerFetchUrl = "https://blockchain.info/ticker";
let fetchedData;

async function DataFetchDisplay(){
	try {
		fetchedData = await fetch(tickerFetchUrl);
		fetchedData = await fetchedData.json();
	} catch (error) {
		console.log('No data');
	} finally {
		DataModify(fetchedData);
		fetchedData = DataSort(fetchedData);
		container.append(currencyGrid);
		for (const currencyItem in fetchedData) {
			let details = fetchedData[currencyItem];
			DomAddCurrency(
				details['currencyName'],
				details['smallUnitName'],
				details['unitPercentage'],
				details['smallestUnitPercentage'],
				details['smallestUnitKilled']
			);
		}
	}
}

export default DataFetchDisplay;