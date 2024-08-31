import DataAddDetails from './DataAddDetails.js'

// Modify the data
// Remove data that isn't needed
// Add more data rows

function DataModify(importedData){
	for (const currencyItem in importedData) {
		let details = importedData[currencyItem];
		const symbol = details['symbol'];
		const price = details['sell'];
		const deleteDeets = ['15m', 'buy', 'last'];
		deleteDeets.forEach((item) => {
			delete details[item];
		})
		DataAddDetails(symbol, price, details);
	}
};

export default DataModify;