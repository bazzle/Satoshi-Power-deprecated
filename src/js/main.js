import nostrKeyDisplay from "./nostr-key";
import addToDOM from "./add-to-dom";
import addCurrencyDetails from "./add-currency-details";

// DOM elements
const container = document.getElementById('js-app');
// Data
const tickerFetchUrl = "https://blockchain.info/ticker";

let fetchedData;

async function fetchData(){
    try {
        fetchedData = await fetch(tickerFetchUrl);
        fetchedData = await fetchedData.json();
    } catch (error) {
        console.log('No data');
    } finally {
        dataFetched();
    }
}

function dataFetched(){

    // Do stuff --------------------------------------------

    // Modify data

    function modifyData(){
        for (const currencyItem in fetchedData) {
            let details = fetchedData[currencyItem];
            const symbol = details['symbol'];
            const price = details['sell'];
            const deleteDeets = ['15m', 'buy', 'last'];
            deleteDeets.forEach((item) => {
                delete details[item];
            })
            addCurrencyDetails(symbol, price, details);
        }
    };
    modifyData();

    // Sort data

    function sortData(){
        fetchedData = Object.entries(fetchedData);
        fetchedData.sort((a, b) => a[1].smallestUnitPercentage - b[1].smallestUnitPercentage);
        fetchedData = Object.fromEntries(fetchedData);
    };
    
    sortData();
    addToDOM();
}



fetchData();
nostrKeyDisplay();

export {container, fetchedData};