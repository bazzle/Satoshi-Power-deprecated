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

// Useful utility functions

function buildElement(ElementType, elementClassName){
    const domElement = document.createElement(ElementType);
    domElement.classList.add(elementClassName);
    return domElement;
}

function getPercentage(unitPrice){
    return Math.floor(unitPrice * 100);
}

function dataFetched(){

    function additionalDetails(price, currencyName, smallUnitName){
        this.currencyName = currencyName;
        this.unitPrice = price / 100000000;
        this.unitPercentage = getPercentage(this.unitPrice);
        this.smallUnitName = smallUnitName;
        this.smallestUnitPrice = this.currencyName === this.smallUnitName ? this.unitPrice : price * 100 / 100000000;
        this.smallestUnitPercentage = getPercentage(this.smallestUnitPrice);
        this.smallestUnitKilled = this.currencyName != this.smallUnitName && this.smallestUnitPercentage > 100;
    }

    function addToDOM(unitName, smallUnitName, unitPercentage, smallestUnitPercentage,  smallestUnitKilled){
        const item = buildElement('li', 'c-currencyitem');
        const itemMain = buildElement('div', 'c-currencyitem__main');
        const itemText = buildElement('span', 'c-currencyitem__text');
        itemMain.append(itemText);
        const percentageBar = (percentage) => {
            const width = percentage > 100 ? 100 : percentage;
            const element = buildElement('span', 'c-currencyitem__percentage-bar');
            element.style.width = width + '%';
            return element;
        };
        if (smallestUnitPercentage > 100) {
            item.classList.add('c-currencyitem--complete');
        }
        if (smallestUnitKilled){
            item.classList.add('c-currencyitem--smallest-complete');
            // main title
            let itemTextString = `${unitName} ${unitPercentage}%`;
            let itemTextStringsmall = `${smallUnitName} ${smallestUnitPercentage}%`;
            itemText.innerText = itemTextStringsmall;
            item.addEventListener('mouseenter',() => {
                itemText.innerText = itemTextString;
            });
            item.addEventListener('mouseleave',() => {
                itemText.innerText = itemTextStringsmall;
            });
            item.append(itemMain);
            itemMain.append(percentageBar(smallestUnitPercentage));
        } else {
            // main title
            itemTextString = smallUnitName < 1 ? `${smallestUnitPercentage} <1%` : `${smallUnitName} ${smallestUnitPercentage}%`;
            itemText.innerText = itemTextString;
            item.append(itemMain);
            itemMain.append(percentageBar(smallestUnitPercentage));
        }

        currencyGrid.append(item);
    }

    function sortData(){
        fetchedData = Object.entries(fetchedData);
        fetchedData.sort((a, b) => a[1].smallestUnitPercentage - b[1].smallestUnitPercentage);
        fetchedData = Object.fromEntries(fetchedData);
    }


    function addCurrencyDetails(symbol, price, data){
        switch (symbol) {
            case "ARS" : {
                const newData = new additionalDetails(price, 'Argentine Peso', 'Argentine Peso');
                Object.assign(data, newData);
                break;
            }
            case "AUD" : {
                const newData = new additionalDetails(price, 'Australian Dollar', 'Australian Cent');
                Object.assign(data, newData);
                break;
            }
            case "BRL" : {
                const newData = new additionalDetails(price, 'Brazilian Real', 'Brazilian Centavo');
                Object.assign(data, newData);
                break;
            }
            case "CAD" : {
                const newData = new additionalDetails(price, 'Canadian Dollar', 'Canadian Cent');
                Object.assign(data, newData);
                break;
            }
            case "CHF" : {
                const newData = new additionalDetails(price, 'Swiss Franc', 'Swiss Rappen');
                Object.assign(data, newData);
                break;
            }
            case "CLP" : {
                const newData = new additionalDetails(price, 'Chilean Peso', 'Chilean Peso');
                Object.assign(data, newData);
                break;
            }
            case "CNY" : {
                const newData = new additionalDetails(price, 'Chinese Yuan', 'Chinese Fen');
                Object.assign(data, newData);
                break;
            }
            case "CZK" : {
                const newData = new additionalDetails(price, 'Czech Koruna', 'Czech Haléř');
                Object.assign(data, newData);
                break;
            }
            case "DKK" : {
                const newData = new additionalDetails(price, 'Danish Krone', 'Danish Øre');
                Object.assign(data, newData);
                break;
            }
            case "EUR" : {
                const newData = new additionalDetails(price, 'Euro', 'Euro Cent');
                Object.assign(data, newData);
                break;
            }
            case "GBP" : {
                const newData = new additionalDetails(price, 'Pound Sterling', 'British Penny');
                Object.assign(data, newData);
                break;
            }
            case "HKD" : {
                const newData = new additionalDetails(price, 'Hong Kong Dollar', 'Hong Kong Cent');
                Object.assign(data, newData);
                break;
            }
            case "HRK" : {
                const newData = new additionalDetails(price, 'Croatian Kuna', 'Croatian Lipa');
                Object.assign(data, newData);
                break;
            }
            case "HUF" : {
                const newData = new additionalDetails(price, 'Hungarian Forint', 'Hungarian Forint');
                Object.assign(data, newData);
                break;
            }
            case "INR" : {
                const newData = new additionalDetails(price, 'Indian Rupee', 'Indian Paisa');
                Object.assign(data, newData);
                break;
            }
            case "ISK" : {
                const newData = new additionalDetails(price, 'Icelandic Króna', 'Icelandic Króna');
                Object.assign(data, newData);
                break;
            }
            case "JPY" : {
                const newData = new additionalDetails(price, 'Japanese Yen', 'Japanese Yen');
                Object.assign(data, newData);
                break;
            }
            case "KRW" : {
                const newData = new additionalDetails(price, 'South Korean Won', 'South Korean Won');
                Object.assign(data, newData);
                break;
            }
            case "NZD" : {
                const newData = new additionalDetails(price, 'New Zealand Dollar', 'New Zealand Cent');
                Object.assign(data, newData);
                break;
            }
            case "PLN" : {
                const newData = new additionalDetails(price, 'Polish Złoty', 'Polish Grosz');
                Object.assign(data, newData);
                break;
            }
            case "RON" : {
                const newData = new additionalDetails(price, 'Romanian Leu', 'Romanian Ban');
                Object.assign(data, newData);
                break;
            }
            case "RUB" : {
                const newData = new additionalDetails(price, 'Russian Ruble', 'Russian Kopek');
                Object.assign(data, newData);
                break;
            }
            case "SEK" : {
                const newData = new additionalDetails(price, 'Swedish Krona', 'Swedish Öre');
                Object.assign(data, newData);
                break;
            }
            case "SGD" : {
                const newData = new additionalDetails(price, 'Singapore Dollar', 'Singapore Cent');
                Object.assign(data, newData);
                break;
            }
            case "THB" : {
                const newData = new additionalDetails(price, 'Thai Baht', 'Thai Satang');
                Object.assign(data, newData);
                break;
            }
            case "TRY" : {
                const newData = new additionalDetails(price, 'Turkish Lira', 'Turkish Kuruş');
                Object.assign(data, newData);
                break;
            }
            case "TWD" : {
                const newData = new additionalDetails(price, 'New Taiwan Dollar', 'Taiwanese Cent');
                Object.assign(data, newData);
                break;
            }
            case "USD" : {
                const newData = new additionalDetails(price, 'United States Dollar', 'United States Cent');
                Object.assign(data, newData);
                break;
            }
        }
        
    };


    // Do stuff --------------------------------------------

    const currencyGrid = buildElement('ul', 'o-currencygrid');
    container.append(currencyGrid);

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

    sortData();

    for (const currencyItem in fetchedData) {
        let details = fetchedData[currencyItem];
        addToDOM(details['currencyName'], details['smallUnitName'], details['unitPercentage'], details['smallestUnitPercentage'], details['smallestUnitKilled']);
    }

};


fetchData();

function nostrKeyDisplay(){

    const nostrPubKey = "npub1y73ajm09j3wra8jj9e3h8rkj3xculh520m9plgc6j57rkg7g0yyqt5p5dt";
    const nostrPubKeyFirstPart = () => {
        return nostrPubKey.substring(0, 15);
    }
    const nostrPubKeyLastPart = () => {
        return nostrPubKey.slice(-15);
    }
    const nostrPubKeyDisplay = `${nostrPubKeyFirstPart()}...${nostrPubKeyLastPart()}`;
    const copySuccessMessage = buildElement('span','c-nostr-copy__message');
    copySuccessMessage.innerHTML = 'Copied';
    const nostrContainer = document.getElementById('js-nostr-key');
    const nostrButton = document.getElementById('js-nostr-copy');
    const copyIcon = document.querySelector('.js-copy-icon');
    
    nostrContainer.innerText = nostrPubKeyDisplay;
    
    nostrButton.addEventListener('click', () => {
        copyKey();
    });

    function copyFeedback(){
        nostrButton.append(copySuccessMessage);
        copyIcon.remove();
        console.log('copied');
        setTimeout(() => {
            nostrButton.append(copyIcon);
            copySuccessMessage.remove();
        }, 2000)
    }

    function copyKey(){
        navigator.clipboard.writeText(nostrPubKey)
        .then(function() {
            console.log('copied');
            copyFeedback();
        })
        .catch(function(err) {
            console.error('Failed to copy text to clipboard: ', err);
        });
    }
}

nostrKeyDisplay();