import Utilities from './Utilities.js';

function CookieNotice(){

	const main = document.querySelector('main');

	// Create element
	const cookieNotice = Utilities.buildElement('div','o-cookie-banner');
	const cookieNoticeParagraph = Utilities.buildElement('p', 'o-cookie-banner__notice');
	const cookieNoticeButton = Utilities.buildElement('button','o-cookie-banner__button');
	cookieNotice.append(cookieNoticeParagraph);
	cookieNotice.append(cookieNoticeButton);
	// Populate text
	cookieNoticeParagraph.innerHTML = 'This website uses cookies to improve your experience';
	cookieNoticeButton.innerHTML = 'Accept cookies';

	// Analytics code
	function googleAnalytics(){
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-YD0LB3QL6X');
	}

	const isCookiesAccepted = localStorage.getItem('cookies_accepted');

	if (isCookiesAccepted === 'true') {
		googleAnalytics();
	} else {
		// Add element to DOM and add event listener
		main.append(cookieNotice);
		cookieNoticeButton.addEventListener('click',() => {
			localStorage.setItem('cookies_accepted', 'true');
			googleAnalytics();
			cookieNotice.remove();
		})
	}
}

export default CookieNotice;