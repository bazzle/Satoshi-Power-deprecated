import addCurrencyDetails from "./add-currency-details";
import utilities from "./utilities";

function fetchModifySortAdd(){

    // DOM elements
    const container = document.getElementById('js-app');
    // Data
    const tickerFetchUrl = "https://blockchain.info/ticker";
	// Responsive
	let mql = window.matchMedia("(max-width: 600px)");

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

        // Add data
        function addToDOM(){
            const currencyGrid = utilities.buildElement('ul', 'o-currencygrid');
        
            for (const currencyItem in fetchedData) {
                let details = fetchedData[currencyItem];
                addCurrency(details['currencyName'], details['smallUnitName'], details['unitPercentage'], details['smallestUnitPercentage'], details['smallestUnitKilled']);
            }
        
            function addCurrency(unitName, smallUnitName, unitPercentage, smallestUnitPercentage, smallestUnitKilled){
                const item = utilities.buildElement('li', 'c-currencyitem');
                const itemMain = utilities.buildElement('div', 'c-currencyitem__main');
                const itemText = utilities.buildElement('span', 'c-currencyitem__text');
                let itemTextString;
                let itemTextStringsmall;
                itemMain.append(itemText);
                const percentageBar = (percentage) => {
                    const width = percentage > 100 ? 100 : percentage;
                    const element = utilities.buildElement('span', 'c-currencyitem__percentage-bar');
                    element.style.width = width + '%';
                    return element;
                };
                if (smallestUnitKilled){
                    item.classList.add('c-currencyitem--complete');
                    // main title
                    itemTextString = `${unitName} ${unitPercentage}%`;
                    itemTextStringsmall = `${smallUnitName} ${smallestUnitPercentage}%`;
                    itemText.innerText = itemTextStringsmall;
					function changePriceValue(newValue){
						itemText.innerText = newValue;
					}
					item.setAttribute('tabindex', 0);
                    item.addEventListener('mouseenter',() => {
                        changePriceValue(itemTextString);
                    });
                    item.addEventListener('mouseleave',() => {
                        changePriceValue(itemTextStringsmall);
                    });
					item.addEventListener('focus', () => {
						changePriceValue(itemTextString);
					});
					item.addEventListener('blur', () => {
						changePriceValue(itemTextStringsmall);
					})
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
        
            container.append(currencyGrid);
        
        }
        addToDOM();

    }


    fetchData();

}

export default fetchModifySortAdd;