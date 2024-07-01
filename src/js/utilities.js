const utilities = {
    buildElement : (ElementType, elementClassName) => {
        const domElement = document.createElement(ElementType);
        domElement.classList.add(elementClassName);
        return domElement;
    },
    getPercentage : (unitPrice) => {
        return Math.floor(unitPrice * 100);
    }
}

export default utilities;