function DomCurrencyInteractivity(item, itemMain, itemSecondary){

	const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

	function handleActive(){
		item.append(itemSecondary);
		itemMain.remove();
	};
	function handleDeactive(){
		item.append(itemMain);
		itemSecondary.remove();
	}

	function responsiveBehaviour(){
		const mql = window.matchMedia('(max-width: 600px)');
		if(mql.matches){
			// Mobile
			item.append(itemSecondary);
			item.removeEventListener('mouseenter', handleActive);
			item.removeEventListener('mouseleave', handleDeactive);
		} else {
			// Desktop
			itemSecondary.remove();
			item.addEventListener('mouseenter', handleActive);
			item.addEventListener('mouseleave', handleDeactive);
		}
	}
	if (!isTouchDevice){
		item.addEventListener('focus', handleActive);
		item.addEventListener('blur', handleDeactive);
	}

	responsiveBehaviour();

	let resizeTimeout;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			responsiveBehaviour();
		}, 200);
	});

}

export default DomCurrencyInteractivity;