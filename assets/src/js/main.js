const container = document.querySelector('.currency-grid');
const tickerFetchUrl = "https://blockchain.info/ticker";

let btcData = {};
let currencyList = [];
let currenciesSmallerUnit = ['USD','GBP','EUR'];

// Fetch data, populate btcData
function fetchData(){
    fetch(tickerFetchUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        btcData = data;
    })
    .catch((error) => {
        console.log(`There was an error - ${error}`);
    })
    .finally((message) => {
        console.log('Completed');
    })
}

// Smallest unit
function getSmallestUnit(currencies, price){
    if(currenciesSmallerUnit.includes(currencies)){
        return price * 100 / 100000000;
    } else {
        return price / 100000000;
    }
}

// Object constructor
function CurrencyItem(currencyName, price){
    this.currencyName = currencyName
    this.price = price
    this.smallestUnitPrice = getSmallestUnit(currencyName, price)
    this.percentage = Math.floor(this.smallestUnitPrice * 100) / 100;
}

function createCompareItem(name, price){
    // create container
    const compareItem = document.createElement('div');
    compareItem.classList.add('compare-item');
    // create text
    const compareItemString = document.createElement('span');
    compareItemString.classList.add('compare-item__string');
    compareItemString.innerText = `${name} ${price}`
    // bring it in
    compareItem.append(compareItemString);
    container.append(compareItem);
};

// Populate our currencyList array
function addData(){
    const entriesList = Object.entries(btcData);
    entriesList.forEach((item) => {
        const entryCurrencyName = item[0];
        const entryCurrencyPrice = item[1]['buy'];
        // Create object
        const currencyListItem = new CurrencyItem(entryCurrencyName, entryCurrencyPrice);
        currencyList.push(currencyListItem);
    })
}

// Do things ----------------------------------

async function processData(){
    const result = await fetchData();
    console.log(result);
    // addData();
    // console.log(currencyList);
    // currencyList.forEach((item) => {
    //     console.log(item);
    //     createCompareItem(item.currencyName, item.percentage);
    // });
};

processData();