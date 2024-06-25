const container = document.querySelector('.currency-grid');
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

function getSmallestUnitPrice(price, smallestUnit){
    if (smallestUnit === currencyName){
        return price;
    } else {
        return 'smallest unit calculation';
    }
}

// note to self, need to build a constructor for this

function dataFetched(){
    console.log(fetchedData);
    const currencies = Object.entries(fetchedData);
    for (const [key, currency] of currencies){
        if (key === "GBP"){
            currency.currencyName = 'Pound Sterling';
            currency.smallestUnit = 'British Penny';
            currency.smallestUnitPrice = function(){
                if(currency.currencyName === currency.smallestUnit){
                    return 'Smallest unit calculation'
                } else {
                    return 'Normal unit calculation'
                }
            };
        };
        
    }
};

// Do stuff

fetchData();