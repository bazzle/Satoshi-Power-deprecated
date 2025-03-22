const Utilities = {
    buildElement : (ElementType:string, elementClassName:string) => {
        const domElement = document.createElement(ElementType);
        domElement.classList.add(elementClassName);
        return domElement;
    },
    getPercentage : (unitPrice:number) => {
        return Math.floor(unitPrice * 100);
    },
	removeLastWord : (str:string) => {
		return str.trim().split(" ").slice(0, -1).join(" ");
	}
}

export default Utilities;