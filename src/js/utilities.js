const Utilities = {
    buildElement : (ElementType, elementClassName) => {
        const domElement = document.createElement(ElementType);
        domElement.classList.add(elementClassName);
        return domElement;
    },
    getPercentage : (unitPrice) => {
        return Math.floor(unitPrice * 100);
    },
	removeLastWord : (str) => {
		return str.trim().split(" ").slice(0, -1).join(" ");
	}
}

export default Utilities;