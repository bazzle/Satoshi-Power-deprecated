function DomCurrencyInteractivity(item, itemMain, itemSecondary){

	function handleActive(){
		item.append(itemSecondary);
		itemMain.remove();
	};
	function handleDeactive(){
		item.append(itemMain);
		itemSecondary.remove();
	}
	function handleFocus(){
		let itemActive = false;
		item.addEventListener('keydown',function(evt){
			if (evt.key === 'Enter'){
				if (itemActive === false){
					handleActive();
					itemActive = true;
				} else {
					handleDeactive();
					itemActive = false;
				}
			}
		});
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

	item.addEventListener('focus', handleFocus);
	item.addEventListener('blur', handleDeactive);

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