import utilities from "./utilities";
import {container} from "./main";
import {fetchedData} from "./main";

function addToDOM(){

    const currencyGrid = utilities.buildElement('ul', 'o-currencygrid');

    for (const currencyItem in fetchedData) {
        let details = fetchedData[currencyItem];
        addCurrency(details['currencyName'], details['smallUnitName'], details['unitPercentage'], details['smallestUnitPercentage'], details['smallestUnitKilled']);
    }

    function addCurrency(unitName, smallUnitName, unitPercentage, smallestUnitPercentage,  smallestUnitKilled){
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
        if (smallestUnitPercentage > 100) {
            item.classList.add('c-currencyitem--complete');
        }
        if (smallestUnitKilled){
            item.classList.add('c-currencyitem--smallest-complete');
            // main title
            itemTextString = `${unitName} ${unitPercentage}%`;
            itemTextStringsmall = `${smallUnitName} ${smallestUnitPercentage}%`;
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

    container.append(currencyGrid);

}

export default addToDOM;