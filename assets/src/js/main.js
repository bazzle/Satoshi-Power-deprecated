const container = document.querySelector('.currency-grid');
const tickerFetchUrl = "https://blockchain.info/ticker";

function createCompareItem(){
    const compareItem = document.createElement('div');
    compareItem.innerHTML = 'This is an item';
    compareItem.classList.add('compare-item');
    container.append(compareItem);
};

let btcData = {};
let currencyList = [];
let currenciesSmallerUnit = [];

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

// Object constructor
function CurrencyItem(currencyName, price){
    this.currencyName = currencyName
    this.price = price
    this.satprice = this.price / 100000000
}

// Smallest unit
function getSmallestUnit(name, satPrice){
    if(name === "USD"){
        return satPrice * 100;
    } else {
        return satprice;
    }
}


// Populate our currencyList array
function addData(){
    const entriesList = Object.entries(btcData);
    entriesList.forEach((item) => {
        const currencyName = item[0];
        const price = item[1]['buy'];
        // Create object
        const currencyListItem = new CurrencyItem(currencyName, price);
        currencyList.push(currencyListItem);
    })
}

// Do things ----------------------------------

fetchData();

setTimeout(() => {
    addData();
    console.log(currencyList);
}, 2000);