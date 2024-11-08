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
		container.append(currencyGrid);
		DataModify(fetchedData);
		fetchedData = DataSort(fetchedData);
		for (const currencyItem in fetchedData) {
			const item = fetchedData[currencyItem];
			if (item.unitName !== undefined){
				DomAddCurrency(item);
			}
			console.log(item);
		}
	}
}

export default DataFetchDisplay;